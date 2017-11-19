import React from 'react';
import './_app.scss';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import NoteCreateForm from '../note-create-form';
import SingleNote from '../single-note';
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
import Linkify from 'react-linkify'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import RaisedButton from 'material-ui/RaisedButton';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleNoteCreate: false,
            toggleSingleNote: false,
            clickedMenuNote: {},
        }
        this.toggleCreateForm = this.toggleCreateForm.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleSingleNote = this.handleSingleNote.bind(this);

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

    handleToggle() {

        this.setState({ open: !this.state.open });
    }

    handleClose() {
        this.setState({ open: false, toggleSingleNote: false });
    }

    handleSingleNote(clickedNote) {
        console.log('_CLICKED NOTE-', clickedNote)
        this.setState({ clickedMenuNote: clickedNote, toggleSingleNote: !this.state.toggleSingleNote })
        // this.handleClose()
    }



    render() {
        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];

        return (

            <div className="appDiv">
                <h1>Noterama</h1>

                {/* ***** CREATE NEW NOTE ***** */}
                <Dialog
                    title="Your notes"
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


                <RaisedButton label="Create Note" primary={true} onClick={() => this.setState({ toggleNoteCreate: !this.state.toggleNoteCreate })} />


                {/* ***** SIDE DRAWER ***** */}
                <div>
                    <RaisedButton
                        label="Open Drawer"
                        onClick={this.handleToggle}
                    />
                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({ open })}
                    >
                        {this.props.notes.map((item, i) => (

                            <MenuItem onClick={() => this.handleSingleNote(item)}>{item.title}</MenuItem>
                        ))}
                        <MenuItem onClick={this.handleClose}>Close Menu</MenuItem>
                    </Drawer>
                </div>

                {/* ***** SINGLE NOTE VIEW ***** */}
                <Dialog
                    title="Your notes"
                    actions={actions}
                    modal={false}
                    open={this.state.toggleSingleNote}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}

                >
                    <Linkify properties={{ target: '_blank' }} >

                        <div>
                            <h2>{this.state.clickedMenuNote.title}</h2>
                            <p>{this.state.clickedMenuNote.content}</p>
                        </div>
                    </Linkify>

                </Dialog>

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