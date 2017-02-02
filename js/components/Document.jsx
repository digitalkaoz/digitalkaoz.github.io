import React from 'react'

export default class extends React.Component {

  static defaultProps = {
    scripts: [],
    styles: [],
    app: null
  };

  render () {
    return <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <title>digitalkaoz.net</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        { this.props.styles.map((s) => { return <link rel='stylesheet' key={s} href={s} type='text/css' /> })}
        <link rel='manifest' href='/manifest.json' />
      </head>
      <body>
        <div id='app' dangerouslySetInnerHTML={{ __html: this.props.app }} />
        { this.props.scripts.map((s) => { return <script key={s} src={s} /> })}
      </body>
    </html>
  }
}
