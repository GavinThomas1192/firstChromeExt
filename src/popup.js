import React from 'react';

import ReactDom from 'react-dom';
import AppContainer from './component/app-container'
import App from './component/app';
import './main.scss';




chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
    const [activeTab] = tabs
    ReactDom.render(<AppContainer />, document.getElementById('root'))
})
