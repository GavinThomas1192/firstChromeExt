import React from 'react';
import { Button } from 'react-bootstrap';
import NoteCreateForm from '../note-create-form'
import uuid from 'uuid/v1';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.noteCreate = this.noteCreate.bind(this);

    }

    noteCreate(note) {
        note.id = uuid();
        this.props.app.setState(state => ({
            notes: [...state.notes, note],
        }));
    }

    render() {
        return (
            <div>
                <h1>Create a new note</h1>
                <NoteCreateForm
                    handleSubmit={this.noteCreate}
                    buttonLabel='Submit Note'
                />
            </div>
        )
    }
}

export default App;