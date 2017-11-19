import React from 'react';
import './_app.scss';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import NoteCreateForm from '../note-create-form';
import SingleNote from '../single-note';
import uuid from 'uuid/v1';
import NoteList from '../note-list'
import AppBar from 'material-ui/AppBar';
import { noteUpdateRequest, noteDeleteRequest } from '../../action/note-actions'

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
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

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
        this.setState({ open: false, toggleSingleNote: false, toggleNoteCreate: false, });
    }

    handleSingleNote(clickedNote) {
        console.log('_CLICKED NOTE-', clickedNote)
        this.setState({ clickedMenuNote: clickedNote, toggleSingleNote: true })
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

        const singleActions = [
            <FlatButton
                label="Close"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Edit"
                primary={true}
                keyboardFocused={true}
                onClick={this.toggleCreateForm}
            />,
        ];

        return (

            <div className="appDiv">
                {/* ***** NAVBAR FOR DRAWER ***** */}
                <AppBar
                    title="Quick Notes"
                    iconElementRight={<IconButton>
                        <FontIcon className="material-icons">add_circle</FontIcon>
                    </IconButton>}
                    onLeftIconButtonTouchTap={this.handleToggle}
                    onRightIconButtonTouchTap={this.toggleCreateForm}
                />

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


                {/* ***** SIDE DRAWER ***** */}
                <div>
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
                    actions={singleActions}
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
                        {/* ***** EDIT POPUP AFTER CLICKING MENU ITEM ***** */}
                        <Dialog
                            title="Update This Note"
                            actions={singleActions}
                            modal={false}
                            open={this.state.toggleNoteCreate}
                            onRequestClose={this.toggleCreateForm}
                            autoScrollBodyContent={true}

                        >
                            <NoteCreateForm
                                buttonText={'Update Note'}
                                onComplete={this.props.noteUpdate}
                                simulateMenuClick={this.handleSingleNote}
                                toggle={this.toggleCreateForm}
                                noteUpdate={this.state.clickedMenuNote} />
                        </Dialog>
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
    noteUpdate: (note) => dispatch(noteUpdateRequest(note)),

});

export default connect(mapStateToProps, mapDispatchToProps)(App);