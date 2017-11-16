// import './_note-item-container.scss';
import { connect } from 'react-redux';
import React from 'react';
import NoteCreateForm from '../note-create-form';
import { Button } from 'react-bootstrap'
import { noteUpdateRequest, noteDeleteRequest } from '../../action/note-actions'

class NoteItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: null,
        };


        this.setTrue = this.setTrue.bind(this);
    }



    setTrue() {
        this.setState({ editing: true });
    }



    render() {
        return (
            <p>
                {
                    this.state.editing == true ?
                        <section className="update">
                            <NoteCreateForm
                                buttonText='Update Note'
                                onComplete={this.props.noteUpdate}
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
                            <Button bsStyle='danger' className='button' onClick={() => this.props.noteDelete(note)}>Delete</Button>
                        </section>
                }
            </p>
        );
    }
}

let mapStateToProps = state => ({
    notes: state.notes,
});

let mapDispatchToProps = dispatch => ({
    noteDelete: (note) => dispatch(noteDeleteRequest(note)),
    noteUpdate: (note) => dispatch(noteUpdateRequest(note)),

});

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);
