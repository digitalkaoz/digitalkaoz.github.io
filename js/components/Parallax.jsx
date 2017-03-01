import React from 'react'
import { Parallax } from 'react-parallax'

export default class extends React.Component {
  static defaultProps = {
    file: null
  };

  static propTypes = {
    file: React.PropTypes.string
  };

  render () {
    return <div className='mdl-grid mdl-grid--no-spacing'>
      <div className='mdl-cell mdl-cell--12-col mdl-cell--hide-phone'>
        <Parallax strength={400} bgImage={this.props.file} />
      </div>
    </div>
  }
}
