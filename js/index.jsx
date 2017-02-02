import React from 'react';
import { render } from 'react-dom';
import { renderToString } from 'react-dom/server';

import App from './components/App.jsx';

class Html extends React.Component {
    render() {
        return <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <title>digitalkaoz.net</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css"/>
            <link rel="stylesheet" href="/main.css"/>
            <link rel="manifest" href="/manifest.json" />
        </head>
        <body>
        <App />
        <script async defer src="/bundle.js"></script>
        </body>
        </html>
    }
}


// Client render (optional):
if (typeof document !== 'undefined') {
     render(<Html/>, document);
}

// Exported static site renderer:
export default (locals, callback) => {
    const html = '<!DOCTYPE html>'+ renderToString(<Html {...locals} />);

    //server side rendering
    if ('function' === typeof callback) {
        callback(null, html);
    } else {
        //html-webpack-plugin
        return html;
    }
};