import React from 'react';

import ReactDom from 'react-dom';
import App from '../app';
import NoteList from '../note-list'
import NoteCreateForm from '../note-create-form';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [{ title: 'Hello Title', content: 'This is an example note.' }],

        };
        this.getApp = this.getApp.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }


    deleteNote(id) {
        let notes = this.state.notes;
        notes = notes.filter(note => note.id !== id);
        this.setState({ notes: notes });
    }

    getApp() {
        return {
            state: this.state,
            setState: this.setState.bind(this),
        };
    }


    componentDidMount() {
        let settedNotes = [];
        // chrome.storage.sync.set({ "notes": this.state.notes }, function () {
        //     console.log('SET THESE NOTES', this.state.notes)
        // });
        chrome.storage.sync.get("notes", function (pulledNotes) {
            console.log('PULLED FROM CHROME STORAGE', pulledNotes.notes);
            settedNotes = pulledNotes.notes;

            console.log('settedNotes', settedNotes);
            this.setState({ notes: settedNotes })
            console.log('stateNotes', this.state.notes);
        }.bind(this))

    }
    componentDidUpdate() {
        // let settedNotes;
        // chrome.storage.sync.set({ "notes": this.state.notes }, function () {
        //     console.log('SET THESE NOTES', this.state.notes)
        // });
        // chrome.storage.sync.get("notes", function (pulledNotes) {
        //     console.log('PULLED FROM CHROME STORAGE', pulledNotes);
        //     settedNotes = pulledNotes.notes;
        // })
        // this.setState({ notes: settedNotes })

        console.log('___STATE___', this.state);
    }

    render() {
        return (
            <div>
                <h1>hello from the app container in src</h1>


                <App
                    app={this.getApp()} />

                <NoteList
                    notes={this.state.notes}
                    deleteNote={this.deleteNote}
                    app={this.getApp()}
                />
            </div>
        );
    }
}

export default AppContainer