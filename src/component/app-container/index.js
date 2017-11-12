import React from 'react';

import ReactDom from 'react-dom';
import App from '../app';
import NoteList from '../note-list'
import NoteCreateForm from '../note-create-form';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [{ title: 'hi', content: 'content' }],
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



    componentDidUpdate() {
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