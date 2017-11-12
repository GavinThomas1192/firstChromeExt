import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app';
import './main.scss';


class AppContainer extends React.Component {

    render() {
        return (
            <App />
        );
    }
}

ReactDom.render(<AppContainer />, document.getElementById('root'));
