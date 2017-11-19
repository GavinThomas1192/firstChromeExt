// import './_note-item-container.scss';
import { connect } from 'react-redux';
import React from 'react';
// import './_noteItem';
import NoteCreateForm from '../note-create-form';
import { Button } from 'react-bootstrap'
import { noteUpdateRequest, noteDeleteRequest } from '../../action/note-actions'
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import Linkify from 'react-linkify'
import Paper from 'material-ui/Paper';



// import Colors from 'material-ui/styles/colors';



class NoteItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            open: false,
            shadow: 5,
        };
        this.setTrue = this.setTrue.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    }



    setTrue() {
        this.setState({ editing: !this.state.editing });
    }

    onMouseOver() {
        this.setState({ shadow: 1 });
    }

    onMouseOut() {
        this.setState({ shadow: 5 });
    }




    render() {
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onClick={this.setTrue}
            />,
        ];
        const style = {
            height: 100,
            width: 100,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
        };
        return (
            <div className='appDiv'>
                <Dialog
                    title="Edit Note"
                    actions={actions}
                    modal={false}
                    open={this.state.editing}
                    onRequestClose={this.handleClose}
                    autoDetectWindowHeight={true}
                    autoScrollBodyContent={true}
                >
                    <NoteCreateForm
                        noteUpdate={this.props.note}
                        buttonText='Update Note'
                        onComplete={this.props.noteUpdate}
                        toggle={this.setTrue}
                        toggleText="Nevermind"
                    />
                    <Button bsStyle='success' onClick={this.setTrue}>Cancel</Button>

                </Dialog>



                <Paper onMouseOver={this.onMouseOver}
                    onMouseOut={this.onMouseOut}
                    zDepth={this.state.shadow} >
                    <Card className="card" style={{ overflow: "scroll" }}
                    >
                        <CardHeader
                            onClick={() => this.props.toggleSingleNote(this.props.note)}
                            title={this.props.note.title}
                            actAsExpander={false}
                            showExpandableButton={false}
                            style={{ overflow: "scroll" }}
                        />
                        <CardActions>
                            <RaisedButton primary={true} label="Edit" onClick={this.setTrue} />
                            <FlatButton label="Delete" onClick={() => this.props.noteDelete(this.props.note)} />
                        </CardActions>
                        <CardText expandable={true} style={{ overflow: "scroll" }}>
                            <Linkify properties={{ target: '_blank' }} >
                                <pre>
                                    {this.props.note.content}
                                </pre>
                            </Linkify>
                        </CardText>
                    </Card>
                </Paper>





            </div >
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
