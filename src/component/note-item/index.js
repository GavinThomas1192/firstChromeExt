// import './_note-item-container.scss';

import React from 'react';
import NoteCreateForm from '../note-create-form';
import { Button } from 'react-bootstrap'

class NoteItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: null,
        };

        this.updateNote = this.updateNote.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.setTrue = this.setTrue.bind(this);
    }

    handleDelete() {
        this.props.deleteNote(this.props.note.id);
    }

    setTrue() {
        this.setState({ editing: true });
    }

    updateNote(note, id) {
        note.id = id;
        let notes = this.props.notes;
        notes = notes.map(prevNote => {
            return id === prevNote.id ? note : prevNote;
        });
        this.props.app.setState({ notes: notes });
        this.setState({ editing: false });
    }

    render() {
        return (
            <p>
                {
                    this.state.editing == true ?
                        <section className="update">
                            <NoteCreateForm
                                noteUpdate={this.props.note}
                                buttonLabel='Update Note'
                                handleSubmit={this.updateNote}
                            />
                        </section>
                        :
                        <section>
                            <section>
                                <h2>{this.props.note.title}</h2>
                            </section>
                            <span>
                                <section>
                                    <p>{this.props.note.content}</p>
                                </section>
                            </span>
                            <section>
                                <Button bsStyle='success' onClick={this.setTrue}>Edit</Button>
                                <p>Double Click To Edit</p>
                            </section>
                            <Button bsStyle='danger' className='button' onClick={this.handleDelete}>Delete</Button>
                        </section>
                }
            </p>
        );
    }
}

export default NoteItem;
