import React from 'react';
import uuid from 'uuid/v1';
import { Provider } from 'react-redux';
import appCreateStore from '../../lib/app-create-store';
import ReactDom from 'react-dom';
import App from '../app';
import NoteCreateForm from '../note-create-form';

let store = appCreateStore();


class AppContainer extends React.Component {
    constructor(props) {
        super(props);


    }


    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

export default AppContainer