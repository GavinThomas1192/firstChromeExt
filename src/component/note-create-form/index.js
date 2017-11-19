import './_noteCreateForm.scss';

import { connect } from 'react-redux'
import React from 'react';
import { Button } from 'react-bootstrap'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';







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
        {
            this.props.buttonText == 'Update Note' ?
                this.props.onComplete(this.state, this.props.noteUpdate.id)
                :

                this.props.onComplete(this.state);
        }
        this.setState = ({

        })
        this.props.toggle();
        this.props.simulateMenuClick(this.state);
    }




    render() {
        return (
            <div>


                <form onSubmit={this.handleSubmit}>
                    <div className='inputContainer'>
                        <TextField
                            hintText="Title"
                            floatingLabelText="Title"
                            multiLine={false}
                            rows={1}
                            name='title'
                            type='text'
                            value={this.state.title}
                            onChange={this.handleChange}
                        /><br />

                    </div>
                    <div className='inputContainer'>
                        <TextField
                            style={{ width: 426 }}
                            hintText="Links, notes, keys"
                            floatingLabelText="Put your notes here"
                            multiLine={true}
                            rows={4}
                            name='content'
                            type='text'
                            value={this.state.content}
                            onChange={this.handleChange}
                        /><br />

                    </div>
                    <div className='buttonContainer'>

                        <RaisedButton label={this.props.buttonText} primary={true} type='submit' />
                        {/* <Button bsStyle='primary' type='submit'>{this.props.buttonText}</Button> */}
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
