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
        //need to pull storage
        //filter out by id
        //set storage
        chrome.storage.sync.get("notes", function (pulledNotes) {
            console.log('NOTE GET AFTER DELETE', pulledNotes.notes);

            this.setState({ notes: pulledNotes.notes })
            console.log('UPDATED STATE WITH NOTE GETS FROM DID MOUNT', this.state.notes);
        }.bind(this))

        chrome.storage.sync.clear(function () {
            console.log('CLEARING CHROME SYNC STORAGE')
        });
        let notes = this.state.notes;
        notes = notes.filter(note => note.id !== id);
        this.setState({ notes: notes });
        chrome.storage.sync.set({ "notes": this.state.notes }, function () {
            console.log('NOTE SET AFTER DELETE', this.state.notes)
        }.bind(this));
    }

    getApp() {
        return {
            state: this.state,
            setState: this.setState.bind(this),
        };
    }


    componentDidMount() {
        let settedNotes = [];
        chrome.storage.sync.set({ "notes": this.state.notes }, function () {
            console.log('SET THESE NOTES', this.state.notes)
        })
        chrome.storage.sync.get("notes", function (pulledNotes) {
            console.log('NOTE GET DID MOUNT', pulledNotes.notes);
            settedNotes = pulledNotes.notes;

            console.log('settedNotes', settedNotes);
            this.setState({ notes: settedNotes })
            console.log('UPDATED STATE WITH NOTE GETS FROM DID MOUNT', this.state.notes);
        }.bind(this))
    

    }
    componentDidUpdate() {
        console.log('__COMPONENT__DID__UPDATE__')
        // chrome.storage.sync.clear();
        chrome.storage.sync.get("notes", function (pulledNotes) {
            console.log('__GETTING_NOTES_FROM_STORAGE__', pulledNotes.notes);

            this.setState({ notes: pulledNotes.notes })
            console.log('__SETTING_STATE_FROM_GET__', this.state.notes);
        }.bind(this))
        // chrome.storage.sync.set({ "notes": this.state.notes }, function () {
        //     console.log('__SETTING_NOTES_INTO_STORAGE__', this.state.notes)
        // }.bind(this));

        console.log('__END_OF_UPDATE');
    }

    render() {
        return (
            <div className='divContainer'>

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