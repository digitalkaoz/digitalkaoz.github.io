import React from 'react';

// Client Rendering
if (typeof document !== 'undefined') {
    const Dom = require('react-dom');
    const App = require('./components/App.jsx').default;

    Dom.render(<App />, document.getElementById('app'));
}

// Serverside Rendering
export default (locals, callback) => {
    const Server = require('react-dom/server');
    const Document = require('./components/Document.jsx').default;

    let app = null;

    if (true === locals['htmlWebpackPlugin'].options.alwaysWriteToDisk) {
        //dump react app into file too in case of prod build
        const App = require('./components/App.jsx').default;
        app = Server.renderToString(<App />);
    }

    return '<!DOCTYPE html>' + Server.renderToStaticMarkup(<Document app={ app } />);
};