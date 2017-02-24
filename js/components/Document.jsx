import React from 'react'

const Document = ({app}) => {
  return <html lang='en'>
    <head>
      <meta charSet='utf-8' />
      <title>digitalkaoz.net</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='preload' href='http://fonts.googleapis.com/css?family=Roboto:300,400,500,700' as='style' />
      <link rel='manifest' href='/manifest.json' />
    </head>
    <body>
      <div id='app' dangerouslySetInnerHTML={{ __html: app }} />
    </body>
  </html>
}

Document.propTypes = { app: React.PropTypes.string }

export default Document
