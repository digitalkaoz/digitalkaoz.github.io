import React from 'react'

import './../../style/index.scss'

import Header from './Header.jsx'
import Main from './Main.jsx'
import Footer from './Footer.jsx'

export default class extends React.Component {
  render () {
    return <div className='mdl-layout mdl-js-layout'>
      <Header />
      <Main />
      <Footer />
    </div>
  }
}
