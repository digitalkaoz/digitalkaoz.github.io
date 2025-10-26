import React from 'react';
import Icon from './Icon.js';

import '../style/footer.scss';
import mail from '../../images/mail.svg?raw';
import bluesky from '../../images/bluesky.svg?raw';
import linkedin from 'devicon/icons/linkedin/linkedin-original.svg?raw';
import github from 'devicon/icons/github/github-original.svg?raw';

const Footer: React.FC = () => {
  return (
    <footer className="mdl-mini-footer" id="contact">
      <div className="mdl-mini-footer__left-section">
        <div className="mdl-logo">&copy; 2025 - Robert Schönthal</div>
      </div>
      <div className="mdl-mini-footer__right-section">
        <ul className="mdl-mini-footer__link-list">
          <li>
            <a href="mailto:robert@schoenthal.io" target="_blank" rel="noreferrer">
              <Icon name="mail" icon={mail} />
            </a>
          </li>
          <li>
            <a href="https://github.com/digitalkaoz" target="_blank" rel="noreferrer">
              <Icon name="github" icon={github} />
            </a>
          </li>
          <li>
            <a href="https://bsky.app/profile/digitalkaoz.net" target="_blank" rel="noreferrer">
              <Icon name="bluesky" icon={bluesky} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/digitalkaoz/" rel="noreferrer">
              <Icon name="linkedin" icon={linkedin} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
