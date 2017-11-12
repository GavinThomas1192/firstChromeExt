// import './_note-form-container.scss';


import React from 'react';
import { Button } from 'react-bootstrap'

class NoteCreateForm extends React.Component {
    constructor(props) {
        super(props);

        let title = props.noteUpdate ? props.noteUpdate.title : '';
        let content = props.noteUpdate ? props.noteUpdate.content : '';

        this.state = {
            title,
            editing: false,
            completed: false,
            content,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.buttonLabel == 'Update Note') {
            this.props.handleSubmit(this.state, this.props.noteUpdate.id);
        } else {
            this.props.handleSubmit(this.state);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='inputContainer'>
                    <input
                        name='title'
                        type='text'
                        value={this.state.title}
                        placeholder='Note Title'
                        onChange={this.handleChange}
                    />
                    <span className="underline"></span>
                </div>
                <div className='inputContainer'>
                    <textarea
                        name='content'
                        type='text'
                        value={this.state.content}
                        placeholder='Enter Note'
                        onChange={this.handleChange}
                    ></textarea>
                    <span className="underline"></span>
                </div>
                <div className='buttonContainer'>
                    <Button bsStyle='primary' type='submit'>{this.props.buttonLabel}</Button>
                </div>
            </form>
        );
    }
}

export default NoteCreateForm;
