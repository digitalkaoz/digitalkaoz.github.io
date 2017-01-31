import React from 'react';
import { render } from 'react-dom';
import { renderToString } from 'react-dom/server';

import App from './components/App.jsx';
//import Styles from './components/Styles.jsx';
import './../style/index.scss';

class Html extends React.Component {
    render() {
        return <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <title>digitalkaoz.net</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css"/>
            <link rel="stylesheet" href="/build/main.css"/>
        </head>
        <body>
        <div id="root"><App /></div>
        <script async defer src="/build/bundle.js"></script>
        </body>
        </html>
    }
}


// Client render (optional):
if (typeof document !== 'undefined') {
    //TODO get rid of the real index.html
     render(<App/>, document.getElementById('root'));
}

// Exported static site renderer:
export default (locals, callback) => {
    const html = renderToString(<Html />);

    callback(null, '<!DOCTYPE html>' + html);
};