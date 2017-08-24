import React from 'react'

import {UserCard} from 'react-github-cards/dist/medium'
import 'react-github-cards/dist/medium.css'
import Icon from './Icon.jsx'
import heart from './../../images/heart.svg'
import './../../style/references.scss'

import Card from './Card.jsx'

const References = ({references}) => {
  return <div className='mdl-grid' id='references'>
    <h2 className='mdl-cell--2-offset-desktop mdl-cell mdl-cell--8-col mdl-cell--8-tablet mdl-cell-4-col-phone'>
                References</h2>
    <div className='mdl-cell mdl-cell--2-offset-desktop mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone'>
      <UserCard username='digitalkaoz' clientId='41ef156b7d2ac5277f4a' clientSecret='72b94076f8dbc32ee37cfa344b94f70e0c1567c9' />
    </div>
    <div className='mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone'>
      <h4>I <Icon name='heart' icon={heart} /> building Tools &amp; contribute to Open-Source Projects.</h4>
    </div>
    <div
      className='mdl-cell--2-offset-desktop mdl-cell mdl-cell--8-col mdl-cell--8-tablet mdl-cell-4-col-phone'>
      <div className='mdl-grid mdl-grid--nesting'>
        { references.map((r) => <div className='mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone' key={r}><Card repo={r} /></div>)}
      </div>
    </div>

  </div>
}

References.propTypes = {
  references: React.PropTypes.arrayOf(React.PropTypes.string)
}

References.defaultProps = {
  references: [
    'php-ipfs-api',
    'issues',
    'yuml-php',
    'versioneye-php',
    'xml-filter',
    'digitalkaoz.github.io',
    'time-calc'
  ]
}

export default References
