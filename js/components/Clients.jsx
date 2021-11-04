import React from 'react'

import './../../style/clients.scss'

import aboutYou from './../../images/references/about_you.png'
import blg from './../../images/references/blg.png'
import collins from './../../images/references/collins.png'
import commercePlus from './../../images/references/commerce_plus.png'
import contentfleet from './../../images/references/contentfleet.png'
import curved from './../../images/references/curved.png'
import expert from './../../images/references/expert.png'
import gala from './../../images/references/gala.png'
import gruner from './../../images/references/gruner_und_jahr.png'
import mediamarkt from './../../images/references/mediamarkt.png'
import otto from './../../images/references/otto.png'
import silpion from './../../images/references/silpion.png'
import sinnerschrader from './../../images/references/sinnerschrader.png'
import tchibo from './../../images/references/tchibo.png'
import truventuro from './../../images/references/truventuro.png'
import burda from './../../images/references/factfield-black.png'
import lsp from './../../images/references/nxtstatista.png'
import noted from './../../images/references/noted-logo.png'
import innogames from './../../images/references/innogames.png'
import cgm from './../../images/references/cgm.png'
import appmotion from './../../images/references/appmotion.png'

export default class Clients extends React.Component {
  static defaultProps = {
    clients: [
            {img: aboutYou, url: 'https://www.aboutyou.de'},
            {img: blg, url: 'http://bornholdtlee.de'},
            {img: collins, url: 'http://www.projekt-collins.de'},
            {img: commercePlus, url: 'https://sinnerschradercommerce.com'},
            {img: contentfleet, url: 'https://contentfleet.de'},
            {img: curved, url: 'https://curved.de'},
            {img: expert, url: 'https://www.expert.de'},
            {img: gala, url: 'http://www.gala.de'},
            {img: gruner, url: 'http://www.guj.de'},
            {img: mediamarkt, url: 'http://www.mediamarkt.de'},
            {img: otto, url: 'https://www.otto.de'},
            {img: silpion, url: 'http://www.silpion.de'},
            {img: sinnerschrader, url: 'https://sinnerschrader.com'},
            {img: truventuro, url: 'http://www.truventuro.de'},
            { img: tchibo, url: 'https://www.tchibo.de' },
            { img: burda, url: 'https://factfield.de' },
      { img: noted, url: 'https://www.noted.com/' },
            {img: innogames, url: 'https://www.innogames.com/'},
      { img: lsp, url: 'https://www.nxt.statista.com/' },
      { img: cgm, url: 'https://www.cgm.com/' },
            {img: appmotion, url: 'https://www.appmotion.de/'}
    ]
  };

  static propTypes = {
    clients: React.PropTypes.arrayOf(React.PropTypes.object)
  };

  renderClient (client) {
    const cardBackground = {
      backgroundImage: 'url(' + client.img + ')'
    }

    return <div key={client.url} className='mdl-cell mdl-cell--2-col mdl-cell--4-col-tablet mdl-cell--2-col-phone'>
      <a href={client.url} target='_blank' style={cardBackground} />
    </div>
  }

  render () {
    return <div className='mdl-grid content' id='clients'>
      <h2 className='mdl-cell mdl-cell--2-offset-desktop mdl-cell--8-col'>Clients</h2>
      <h4 className='mdl-cell mdl-cell--2-offset-desktop mdl-cell--8-col'>Companies i already worked for!</h4>
      <div className='mdl-cell mdl-cell--2-offset-desktop mdl-cell--8-col'>
        <div className='mdl-grid mdl-grid--nesting'>
          { this.props.clients.map(this.renderClient)}
        </div>
      </div>
    </div>
  }
}
