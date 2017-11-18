import React from 'react';
import './_app.scss';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import NoteCreateForm from '../note-create-form'
import uuid from 'uuid/v1';
import NoteList from '../note-list'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
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
        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                keyboardFocused={true}
                onClick={this.toggleCreateForm}
            />,
        ];
        return (

                <div className="appDiv">
                    <h1>Noterama</h1>


                        <Dialog
                            title="Dialog With Date Picker"
                            actions={actions}
                            modal={false}
                            open={this.state.toggleNoteCreate}
                            onRequestClose={this.toggleCreateForm}
                            autoScrollBodyContent={true}

                        >
                            <NoteCreateForm
                                buttonText={'Submit'}
                                onComplete={this.props.noteCreate}
                                toggle={this.toggleCreateForm} />
                        </Dialog> 
                   

                    <RaisedButton label="Create Note" primary={true} onClick={() => this.setState({toggleNoteCreate: !this.state.toggleNoteCreate})} />


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