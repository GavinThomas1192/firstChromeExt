import React from 'react';
import uuid from 'uuid/v1';
import { Provider } from 'react-redux';
import appCreateStore from '../../lib/app-create-store';
import ReactDom from 'react-dom';
import App from '../app';
import NoteCreateForm from '../note-create-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

let store = appCreateStore();


class AppContainer extends React.Component {
    constructor(props) {
        super(props);


    }


    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <Provider store={store}>
                    <App />
                </Provider>
            </MuiThemeProvider>

        );
    }
}

export default AppContainer