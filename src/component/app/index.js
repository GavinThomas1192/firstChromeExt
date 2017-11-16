import React from 'react';
import {connect} from 'react-redux';
import { Button } from 'react-bootstrap';
import NoteCreateForm from '../note-create-form'
import uuid from 'uuid/v1';
import * as utils from '../../lib/storage';
import {notesFetchRequest} from '../../action/note-actions';



class App extends React.Component {
    constructor(props) {
        super(props);
        // this.noteCreate = this.noteCreate.bind(this);

    }

    componentDidMount() {
        this.props.notesFetch("notes");
    }

    render() {
        return (
            <div>
                <h1>Hello from App component</h1>
            
            </div>
        )
    }
}


let mapStateToProps = state => ({
    notes: state.notes,
  });
  
  let mapDispatchToProps = dispatch => ({
    notesFetch: (key) => dispatch(notesFetchRequest(key)),
  
  });

export default connect(mapStateToProps, mapDispatchToProps)(App);