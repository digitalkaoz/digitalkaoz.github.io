import React from 'react';
import Document from './components/Document.jsx';

const font = 'http://fonts.googleapis.com/css?family=Roboto:300,400,500,700';
const styles = [
    font,
    '/main.css'
];

const scripts = [
    '/bundle.js'
];

// Client Rendering
if (typeof document !== 'undefined') {
    const Dom = require('react-dom');
    const App = require('./components/App.jsx').default;

    Dom.render(<App />, document.getElementById('app'));
}

export default (locals, callback) => {
    const Server = require('react-dom/server');
    const prefix = '<!DOCTYPE html>';

    // Serverside Rendering
    if ('function' === typeof callback) {
        const App = require('./components/App.jsx').default;
        const app = Server.renderToString(<App />);

        callback(null, prefix + Server.renderToStaticMarkup(<Document app={ app } scripts={ scripts } styles={ styles }/>));
    } else {
        // Build-Time Rendering
        return prefix + Server.renderToStaticMarkup(<Document styles={[font]} />);
    }
};