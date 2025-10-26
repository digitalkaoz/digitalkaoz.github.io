import React from 'react';

import { GithubCard } from 'github-user-repo-card';

type Props = { repo: string };

const Card: React.FC<Props> = ({ repo }) => {
  let username = 'digitalkaoz';
  let concreteRepo = repo;
  if (repo.includes('/')) {
    const parts = repo.split('/');
    username = parts[0];
    concreteRepo = parts[1];
  }

  return <GithubCard name={username} type="repo" repository={concreteRepo} />;
};

export default Card;
