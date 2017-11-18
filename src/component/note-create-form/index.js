import './_noteCreateForm.scss';

import { connect } from 'react-redux'
import React from 'react';
import { Button } from 'react-bootstrap'
import TextField from 'material-ui/TextField';
import {Editor, EditorState} from 'draft-js';





class NoteCreateForm extends React.Component {
    constructor(props) {
        super(props);

        let title = props.noteUpdate ? props.noteUpdate.title : '';
        let content = props.noteUpdate ? props.noteUpdate.content : '';
        let id = props.noteUpdate ? props.noteUpdate.id : 1;

        this.state = {
            title,
            id,
            editing: false,
            completed: false,
            content,
            editorState: EditorState.createEmpty(),
        };
        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(editorState){
        this.setState({editorState: editorState})
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        {
            this.props.buttonText == 'Update Note' ?
                this.props.onComplete(this.state, this.props.noteUpdate.id)
                :

                this.props.onComplete(this.state);
        }
        this.setState = ({

        })
        this.props.toggle();
    }

    render() {
        return (
            <div>
            <Editor editorState={this.state.editorState} onChange={this.onChange} />
            <form onSubmit={this.handleSubmit}>
                <div className='inputContainer'>
                <TextField
                    hintText="Title"
                    errorText="This field is required."
                    floatingLabelText="Title"
                    multiLine={false}
                    rows={1}
                    name='title'
                    type='text'
                    value={this.state.title}
                    onChange={this.handleChange}
                    /><br />
                    {/* <input
                        name='title'
                        type='text'
                        value={this.state.title}
                        placeholder='Note Title'
                        onChange={this.handleChange}
                    />
                    <span className="underline"></span> */}
                </div>
                <div className='inputContainer'>
                <TextField
                    hintText="Links, notes, keys"
                    errorText="This field is required."
                    floatingLabelText="Put your notes here"
                    multiLine={true}
                    rows={4}
                    name='content'
                    type='text'
                    value={this.state.content}
                    onChange={this.handleChange}
                    /><br />
                    {/* <textarea
                        placeholder='Enter Note'
                    ></textarea>
                    <span className="underline"></span> */}
                </div>
                <div className='buttonContainer'>
                    <Button bsStyle='primary' type='submit'>{this.props.buttonText}</Button>
                </div>
            </form>
            </div>
        );
    }
}


let mapStateToProps = state => {


};
let mapDispatchToProps = dispatch => ({
    userFetch: () => dispatch(userFetchRequest()),

});


export default connect(mapStateToProps, mapDispatchToProps)(NoteCreateForm);
