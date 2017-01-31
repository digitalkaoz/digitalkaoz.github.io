import React from 'react'

import './../../style/main.scss'

import stairs from './../../images/stairs.jpg';
import c64 from './../../images/c64.jpg';
import net from './../../images/netz.jpg';
import tunnel from './../../images/elbtunnel.jpg';

import Parallax from './Parallax.jsx';
import Cards from './References.jsx'
import Tools from './Tools.jsx'
import Clients from './Clients.jsx'

export default class extends React.Component {
  render () {
    return <main className='mdl-layout__content'>
      <div className="page-content">
        <Parallax file={stairs}/>
        <Tools />
        <Parallax file={c64}/>
        <Clients />
        <Parallax file={net}/>
        <Cards />
        <Parallax file={tunnel}/>
      </div>
    </main>
  }
}
