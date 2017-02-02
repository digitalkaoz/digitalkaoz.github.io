import React from 'react'

import { RepoCard } from 'react-github-cards/src/themes/medium/index'

// import './../../style/index.scss';

export default class extends React.Component {

  static defaultProps = {
    repo: null
  };

  render () {
    return <RepoCard username='digitalkaoz' repo={this.props.repo} clientId='41ef156b7d2ac5277f4a' clientSecret='72b94076f8dbc32ee37cfa344b94f70e0c1567c9' />
  }
}
