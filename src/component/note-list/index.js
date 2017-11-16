// import './_note-update-form.scss';

import React from 'react';
import NoteItem from '../note-item';
import { connect } from 'react-redux'

class NoteList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log('Inside note-list component', this.props)
        return (
            < div >
                <h1>Hello from the note-list component</h1>
                {this.props.notes.length !== 0 ?
                    <ul className="orderList">
                        {this.props.notes.map((item, i) => {
                            return (
                                <NoteItem key={i} note={item}

                                />
                            );
                        }
                        )}
                    </ul>
                    :
                    <h3>You have no notes!</h3>
                }
            </div >
        );
    }
}



let mapStateToProps = state => ({
    notes: state.notes,
});

let mapDispatchToProps = dispatch => ({
    chromeGet: (key) => dispatch(chromeGetRequest(key)),
    noteCreate: (note) => dispatch(noteCreateRequest(note)),

});

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);