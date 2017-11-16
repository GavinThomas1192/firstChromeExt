import React from 'react';
import uuid from 'uuid/v1';
import {Provider} from 'react-redux';
import appCreateStore from '../../lib/app-create-store';
import ReactDom from 'react-dom';
import App from '../app';
import NoteList from '../note-list'
import NoteCreateForm from '../note-create-form';
import * as utils from '../../lib/storage';


let store = appCreateStore()


class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [{ title: 'Hello Title', content: 'This is an example note.' }],

        };
       
    }

    // noteCreate(note) {
    //     note.id = uuid();
    //     this.props.app.setState(state => ({
    //         notes: [...state.notes, note],
    //     }));
    //     utils.storageSet('notes', this.state.notes);
    //     console.log('__END_OF_NOTE_CREATE__')
        
    // }


    // deleteNote(id) {

    //     let notes = this.state.notes;
    //     notes = notes.filter(note => note.id !== id);
    //     this.setState({ notes: notes });

    // }

    // getApp() {
    //     return {
    //         state: this.state,
    //         setState: this.setState.bind(this),
    //     };
    // }


    componentDidMount() {
        // let settedNotes = [];
        // chrome.storage.sync.set({ "notes": this.state.notes }, function () {
        //     console.log('SET THESE NOTES', this.state.notes)
        // })
        // chrome.storage.sync.get("notes", function (pulledNotes) {
        //     console.log('NOTE GET DID MOUNT', pulledNotes.notes);

        //     this.setState({ notes: pulledNotes.notes })
        //     console.log('UPDATED STATE WITH NOTE GETS FROM DID MOUNT', this.state.notes);
        // }.bind(this))
    

    }

    // componentWillReceiveProps(nextProps){
    //     console.log('__WILL_RECEIVE_PROPS__', nextProps)
    //   }
    componentDidUpdate() {
        console.log('__COMPONENT__DID__UPDATE__')
        // chrome.storage.sync.clear();
        // chrome.storage.sync.get("notes", function (pulledNotes) {
        //     console.log('__GETTING_NOTES_FROM_STORAGE__', pulledNotes.notes);

        //     // this.setState({ notes: pulledNotes.notes })
        //     console.log('__SETTING_STATE_FROM_GET__', this.state.notes);
        // }.bind(this))
        // chrome.storage.sync.set({ "notes": this.state.notes }, function () {
        //     console.log('__SETTING_NOTES_INTO_STORAGE__', this.state.notes)
        // }.bind(this));

        console.log('__END_OF_UPDATE');
    }

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

export default AppContainer