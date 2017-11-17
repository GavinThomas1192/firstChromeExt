import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import NoteCreateForm from '../note-create-form'
import uuid from 'uuid/v1';
import NoteList from '../note-list'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import * as utils from '../../lib/storage';
import { chromeGetRequest, chromeSetRequest, noteCreateRequest } from '../../action/note-actions';

import RaisedButton from 'material-ui/RaisedButton';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleNoteCreate: false,
        }
        this.toggleCreateForm = this.toggleCreateForm.bind(this);

    }

    componentDidMount() {
        this.props.chromeGet("notes");
    }

    componentDidUpdate() {
        this.props.chromeSet('notes', this.props.notes);
        console.log('LOOKHERE', this.props)

    }

    toggleCreateForm() {
        this.setState({ toggleNoteCreate: !this.state.toggleNoteCreate })
    }



    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>

                <div>
                    <h1>Hello from App component</h1>


                    {this.state.toggleNoteCreate ?
                        <NoteCreateForm
                            buttonText={'Submit'}
                            onComplete={this.props.noteCreate}
                            toggle={this.toggleCreateForm} /> : undefined
                    }

                    <RaisedButton label="Create Note" primary={true} onClick={() => this.setState({ toggleNoteCreate: !this.state.toggleNoteCreate })} />

                    {<Button bsStyle='primary' onClick={() => this.props.toggleNoteCreateForm()}>Toggle TEST</Button>}

                    <NoteList
                    />

                </div >
            </MuiThemeProvider>

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