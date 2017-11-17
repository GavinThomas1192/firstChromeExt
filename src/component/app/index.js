import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import NoteCreateForm from '../note-create-form'
import uuid from 'uuid/v1';
import NoteList from '../note-list'

import * as utils from '../../lib/storage';
import { chromeGetRequest, chromeSetRequest, noteCreateRequest } from '../../action/note-actions';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleNoteCreate: false,
        }

    }

    componentDidMount() {
        this.props.chromeGet("notes");
    }

    componentDidUpdate() {
        // chrome.storage.sync.clear(function () {
        //     console.log('_CHROME_STORAGE_CLEARED_')
        // })
        console.log('LOOKHERE', this.props.notes)
        {
            this.props.notes.length !== 0 ?
                this.props.chromeSet('notes', this.props.notes)
                : console.log('This.props.notes looks empty')
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('_APP_COMP_RECEIVED_PROPS', nextProps)
    //     console.log('THISPROPS', this.props)
    // }

    render() {
        return (
            <div>
                <h1>Hello from App component</h1>


                {this.state.toggleNoteCreate ?
                    <NoteCreateForm
                        buttonText={'Submit'}
                        onComplete={this.props.noteCreate} /> : undefined
                }


                <Button bsStyle='primary' onClick={() => this.setState({ toggleNoteCreate: !this.state.toggleNoteCreate })}>Toggle Create</Button>

                <NoteList
                />

            </div >
        )
    }
}


let mapStateToProps = state => ({
    notes: state.notes,
});

let mapDispatchToProps = dispatch => ({
    chromeSet: (key, data) => dispatch(chromeSetRequest(key, data)),
    chromeGet: (key) => dispatch(chromeGetRequest(key)),
    noteCreate: (note) => dispatch(noteCreateRequest(note)),

});

export default connect(mapStateToProps, mapDispatchToProps)(App);