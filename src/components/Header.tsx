import React from 'react';

import '../style/header.scss';
import me from '../../images/me.jpg';
import heart from '../../images/heart.svg?raw';

import Icon from './Icon.js';

const Header: React.FC = () => {
  return (
    <header>
      <div className="mdl-layout__header mdl-layout__header--transparent sticky-header">
        <div className="mdl-layout__header-row mdl-layout__header--waterfall">
          <div className="mdl-layout-spacer" />
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="#tools">
              Tools
            </a>
            <a className="mdl-navigation__link" href="#clients">
              Clients
            </a>
            <a className="mdl-navigation__link" href="#references">
              References
            </a>
            <a className="mdl-navigation__link" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </div>

      <h1 className="mdl-typography--text-center">Robert Schönthal</h1>
      <img src={me} className="me-head" />
      <h4 className="mdl-typography--text-center">
        full stack software engineer &amp; architect with <Icon name="heart" icon={heart} /> for
        typed Languages, Cloud &amp; Testing
      </h4>
    </header>
  );
};

export default Header;
