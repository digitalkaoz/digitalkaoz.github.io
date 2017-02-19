import React from 'react'

import { RepoCard } from 'react-github-cards/dist/medium'
import 'react-github-cards/dist/medium.css'

const Card = ({repo}) => {
  return <RepoCard
      username='digitalkaoz'
      repo={repo}
      clientId='41ef156b7d2ac5277f4a'
      clientSecret='72b94076f8dbc32ee37cfa344b94f70e0c1567c9'
  />
};

Card.propTypes = { repo: React.PropTypes.string };

export default Card;
