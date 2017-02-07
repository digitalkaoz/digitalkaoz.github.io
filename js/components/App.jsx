import React from 'react'

import './../../style/index.scss'

import Header from './Header.jsx'
import Main from './Main.jsx'
import Footer from './Footer.jsx'

const App = () => {
  return <div className='mdl-layout mdl-js-layout'>
    <Header />
    <Main />
    <Footer />
  </div>
}

export default App
