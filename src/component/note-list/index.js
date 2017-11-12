// import './_note-update-form.scss';

import React from 'react';
import NoteItem from '../note-item';

class NoteList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log('Inside note list NOTES', this.props)
        return (
            < div >
                <h1>note list container</h1>
                <ul className="orderList">
                    {this.props.notes.map((item, i) => {
                        return (
                            <NoteItem key={i} note={item}
                                deleteNote={this.props.deleteNote}
                                app={this.props.app}
                                notes={this.props.app.state.notes}
                            />
                        );
                    }
                    )}
                </ul>
            </div >
        );
    }
}

export default NoteList;
