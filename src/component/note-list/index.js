// import './_note-update-form.scss';

import React from 'react';
import NoteItem from '../note-item';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
};

class NoteList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log('Inside note-list component', this.props.notes)
        return (
            < div >

                {this.props.notes.length !== 0 ?
                    <div style={styles.root}>
                    <h1>Here are your notes</h1>
                        <GridList
                            cellHeight={180}
                            style={styles.gridList}
                        >

                            {this.props.notes.map((item, i) => (

                                <GridTile
                                    key={i}
                                >
                                    <NoteItem key={i} note={item}

                                    />
                                </GridTile>
                            ))}

                        </GridList>
                    </div>
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