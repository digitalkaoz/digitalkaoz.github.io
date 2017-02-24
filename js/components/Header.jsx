import React from 'react'
import Headroom from 'react-headroom'

import header from './../../style/header.scss'
import heart from './../../images/heart.svg'

import Icon from './Icon.jsx'

const Header = () => {
  return <header>
    <Headroom >
      <div className='mdl-layout__header mdl-layout__header--transparent'>
        <div className='mdl-layout__header-row mdl-layout__header--waterfall'>
          <div className='mdl-layout-spacer' />
          <nav className='mdl-navigation'>
            <a className='mdl-navigation__link' href='#tools'>Tools</a>
            <a className='mdl-navigation__link' href='#clients'>Clients</a>
            <a className='mdl-navigation__link' href='#references'>References</a>
            <a className='mdl-navigation__link' href='#contact'>Contact</a>
          </nav>
        </div>
      </div>
    </Headroom>

    <h1 className='mdl-typography--text-center'>Robert Schönthal</h1>
    <img src={require('./../../images/me.png')} className='me-head' />
    <h4 className='mdl-typography--text-center'>full stack software engineer &amp; architect with <Icon name='heart' icon={heart} /> for PHP, Javascript &amp; Testing</h4>
  </header>
}

export default Header
