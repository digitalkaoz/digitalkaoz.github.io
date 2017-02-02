import React from 'react'
import './../../style/icon.scss'

export default class extends React.Component {

  static defaultProps = {
    icon: null,
    name: null
  };

  render () {
    const name = this.props.name ? 'icon-' + this.props.name : ''

    return React.createElement(this.props.icon, {className: 'icon ' + name})
  }
}
