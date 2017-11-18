// import './_note-item-container.scss';
import { connect } from 'react-redux';
import React from 'react';
// import './_noteItem';
import NoteCreateForm from '../note-create-form';
import { Button } from 'react-bootstrap'
import { noteUpdateRequest, noteDeleteRequest } from '../../action/note-actions'
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
// import Colors from 'material-ui/styles/colors';


class NoteItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
        };


        this.setTrue = this.setTrue.bind(this);
    }



    setTrue() {
        this.setState({ editing: !this.state.editing });
    }



    render() {
        return (
            <div>
                {
                    this.state.editing == true ?
                        <section className="update">
                            <NoteCreateForm
                                noteUpdate={this.props.note}
                                buttonText='Update Note'
                                onComplete={this.props.noteUpdate}
                                toggle={this.setTrue}
                                toggleText="Nevermind"
                            />
                            {/* THIS BUTTON NEEDS TO CHANGE TO NEVERMIND! */}
                            <Button bsStyle='success' onClick={this.setTrue}>Edit</Button>
                        </section>
                        :

                        <Card>
                            <CardHeader
                                title={this.props.note.title}
                                subtitle="Subtitle"
                                actAsExpander={true}
                                showExpandableButton={true}
                            />
                            <CardActions>
                                <RaisedButton primary={true} label="Edit" onClick={this.setTrue} />
                                <FlatButton label="Delete" onClick={() => this.props.noteDelete(this.props.note)} />
                            </CardActions>
                            <CardText expandable={true}>
                                {this.props.note.content}
                            </CardText>
                        </Card>

                }
            </div>
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
