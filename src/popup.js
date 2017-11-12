import React from 'react';

import ReactDom from 'react-dom';
import App from './component/app';
import NoteList from './component/note-list'
import './main.scss';
import NoteCreateForm from './component/note-create-form'


// class AppContainer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             notes: [],
//         };
//         this.getApp = this.getApp.bind(this);
//         this.deleteNote = this.deleteNote.bind(this);
//     }


//     deleteNote(id) {
//         let notes = this.state.notes;
//         notes = notes.filter(note => note.id !== id);
//         this.setState({ notes: notes });
//     }

//     getApp() {
//         return {
//             state: this.state,
//             setState: this.setState.bind(this),
//         };
//     }



//     componentDidUpdate() {
//         console.log('___STATE___', this.state);
//     }

//     render() {
//         return (
//             <div>
//                 <h1>hello</h1>


//                 {/* <App
//                     app={this.getApp()} />

//                 <NoteList
//                     notes={this.state.notes}
//                     deleteNote={this.deleteNote}
//                     app={this.getApp()}
//                 /> */}
//             </div>
//         );
//     }
// }
chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
    const [activeTab] = tabs
    ReactDom.render(<NoteCreateForm />, document.getElementById('root'))
})
