import React from 'react'

import './../../style/index.scss'

import Header from './Header.jsx'
import Main from './Main.jsx'
import Footer from './Footer.jsx'

export default class App extends React.Component {
  componentDidMount () {
    if (
            typeof document === 'object' &&
            typeof window === 'object' &&
            'serviceWorker' in navigator
        ) {
      window.addEventListener('load', _ => {
        navigator.serviceWorker.register('service-worker.js').catch(_ => {
                    // darn failed
        })
      })
    }
  }

  render () {
    return <div className='mdl-layout mdl-js-layout'>
      <Header />
      <Main />
      <Footer />
    </div>
  }
}
