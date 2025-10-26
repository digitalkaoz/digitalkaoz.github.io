import React from 'react';

import { GithubCard } from 'github-user-repo-card';

import Icon from './Icon.js';
import heart from '../../images/heart.svg?raw';
import '../style/references.scss';

import Card from './Card.js';

type Props = { references?: string[] };

const References: React.FC<Props> = ({
  references = [
    'ssm-shell',
    'silke.design',
    'haproxy-runtime-cli',
    'webuntis-monitor',
    'php-ipfs-api',
    'issues',
    'yuml-php',
    'versioneye-php',
    'xml-filter',
    'digitalkaoz.github.io',
    'time-calc',
    'rechentrainer',
    'aws-log-shipper',
    'py_human_name_compare',
    'flutter-timesheet',
    'preload-polyfill',
    'exif-image-sorter',
    'terrarium-tf/cli',
  ],
}) => {
  return (
    <div className="mdl-grid" id="references">
      <h2 className="mdl-cell--2-offset-desktop mdl-cell mdl-cell--8-col mdl-cell--8-tablet mdl-cell-4-col-phone">
        References
      </h2>
      <div className="mdl-cell mdl-cell--2-offset-desktop mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone">
        <GithubCard type="profile" name="digitalkaoz" repository="" />
      </div>
      <div className="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone">
        <h4>
          I <Icon name="heart" icon={heart} /> building Tools &amp; contribute to Open-Source
          Projects.
        </h4>
      </div>
      <div className="mdl-cell--2-offset-desktop mdl-cell mdl-cell--8-col mdl-cell--8-tablet mdl-cell-4-col-phone">
        <div className="mdl-grid mdl-grid--nesting">
          {references.map((r) => (
            <div
              className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone repo"
              key={r}
            >
              <Card repo={r} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default References;
