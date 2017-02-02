import React from 'react'
import Icon from './Icon.jsx'

import './../../style/footer.scss'
import mail from './../../images/mail.svg'
import twitter from './../../images/twitter.svg'
import xing from './../../images/xing.svg'
import github from './../../node_modules/devicon/icons/github/github-original.svg'

export default class extends React.Component {
  render () {
    return <footer className='mdl-mini-footer'>
      <a id='contact' />
      <div className='mdl-mini-footer__left-section'>
        <div className='mdl-logo'>&copy; 2017 - Robert Schönthal</div>
      </div>
      <div className='mdl-mini-footer__right-section'>
        <ul className='mdl-mini-footer__link-list'>
          <li><a className='mdl-button mdl-js-button mdl-button--raised mdl-button--fab mdl-js-ripple-effect' href='mailto:robert.schoenthal@gmail.com' target='_blank'><Icon name='mail' icon={mail} /></a></li>
          <li><a className='mdl-button mdl-js-button mdl-button--raised mdl-button--fab mdl-js-ripple-effect' href='https://github.com/digitalkaoz' target='_blank'><Icon name='github' icon={github} /></a></li>
          <li><a className='mdl-button mdl-js-button mdl-button--raised mdl-button--fab mdl-js-ripple-effect' href='https://twitter.com/digitalkaoz' target='_blank'><Icon name='twitter' icon={twitter} /></a></li>
          <li><a className='mdl-button mdl-js-button mdl-button--raised mdl-button--fab mdl-js-ripple-effect' href='https://xing.com'><Icon name='xing' icon={xing} /></a></li>
        </ul>
      </div>
    </footer>
  }
}
