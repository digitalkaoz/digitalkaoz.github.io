import React from 'react';
import Icon from './Icon.js';

import '../style/tools.scss';
import aws from '/node_modules/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg?raw';
import angular from '/node_modules/devicon/icons/angularjs/angularjs-plain-wordmark.svg?raw';
import docker from '/node_modules/devicon/icons/docker/docker-plain.svg?raw';
import git from '/node_modules/devicon/icons/git/git-plain.svg?raw';
import javascript from '/node_modules/devicon/icons/javascript/javascript-plain.svg?raw';
import java from '/node_modules/devicon/icons/java/java-plain.svg?raw';
import linux from '/node_modules/devicon/icons/linux/linux-plain.svg?raw';
import mysql from '/node_modules/devicon/icons/mysql/mysql-plain-wordmark.svg?raw';
import nodejs from '/node_modules/devicon/icons/nodejs/nodejs-plain.svg?raw';
import php from '/node_modules/devicon/icons/php/php-plain.svg?raw';
import react from '/node_modules/devicon/icons/react/react-original.svg?raw';
import redis from '/node_modules/devicon/icons/redis/redis-plain.svg?raw';
import symfony from '/node_modules/devicon/icons/symfony/symfony-original.svg?raw';
import typescript from '/node_modules/devicon/icons/typescript/typescript-plain.svg?raw';
import python from '/node_modules/devicon/icons/python/python-plain.svg?raw';
import flutter from '/node_modules/devicon/icons/flutter/flutter-plain.svg?raw';
import vue from '/node_modules/devicon/icons/vuejs/vuejs-original.svg?raw';
import go from '/node_modules/devicon/icons/go/go-original.svg?raw';
import fastapi from '/node_modules/devicon/icons/fastapi/fastapi-original.svg?raw';
import circleci from '/node_modules/devicon/icons/circleci/circleci-plain-wordmark.svg?raw';
import dart from '/node_modules/devicon/icons/dart/dart-original.svg?raw';
import datadog from '/node_modules/devicon/icons/datadog/datadog-original.svg?raw';
import firebase from '/node_modules/devicon/icons/firebase/firebase-original.svg?raw';
import github from '/node_modules/devicon/icons/github/github-original.svg?raw';
import githubactions from '/node_modules/devicon/icons/githubactions/githubactions-original.svg?raw';
import kubernetes from '/node_modules/devicon/icons/kubernetes/kubernetes-original.svg?raw';
import mobx from '/node_modules/devicon/icons/mobx/mobx-original.svg?raw';
import openapi from '/node_modules/devicon/icons/openapi/openapi-original.svg?raw';
import svelte from '/node_modules/devicon/icons/svelte/svelte-original.svg?raw';
import tailwind from '/node_modules/devicon/icons/tailwindcss/tailwindcss-original.svg?raw';
import vite from '/node_modules/devicon/icons/vitejs/vitejs-original.svg?raw';
import vitest from '/node_modules/devicon/icons/vitest/vitest-original.svg?raw';

import es from '/node_modules/devicon/icons/elasticsearch/elasticsearch-original.svg?raw';

type ToolItem = { icon: string; url: string; name?: string };

const defaultTools: ToolItem[] = [
  { icon: javascript, url: 'https://www.javascript.com/' },
  { icon: typescript, url: 'https://www.typescriptlang.org/', name: 'typescript' },
  { icon: php, url: 'http://www.php.net/' },
  { icon: java, url: 'https://www.java.com' },
  { icon: dart, url: 'https://dart.com', name: 'dart' },
  { icon: nodejs, url: 'https://nodejs.org/en/' },
  { icon: python, url: 'https://www.python.org/', name: 'python' },
  { icon: go, url: 'https://go.dev/', name: 'golang' },
  { icon: aws, url: 'https://aws.amazon.com' },
  { icon: docker, url: 'https://www.docker.com/' },
  { icon: linux, url: 'https://www.linuxfoundation.org/', name: 'linux' },
  { icon: git, url: 'https://git-scm.com/' },
  { icon: angular, url: 'https://angular.io/' },
  { icon: react, url: 'https://react.dev/' },
  { icon: symfony, url: 'http://symfony.com/', name: 'symfony-original' },
  { icon: flutter, url: 'https://flutter.dev/', name: 'flutter' },
  { icon: svelte, url: 'https://svelte.dev/', name: 'svelte' },
  { icon: tailwind, url: 'https://tailwindcss.com/', name: 'tailwind' },
  { icon: vue, url: 'https://vuejs.org/', name: 'vue' },
  { icon: fastapi, url: 'https://fastapi.tiangolo.com/', name: 'fastapi' },
  { icon: mysql, url: 'https://www.mysql.com/' },
  { icon: redis, url: 'https://redis.io/' },
  { icon: datadog, url: 'https://datadog.com', name: 'datadog' },
  { icon: firebase, url: 'https://firebase.com', name: 'firebase' },
  { icon: github, url: 'https://github.com', name: 'github' },
  { icon: kubernetes, url: 'https://kubernetes.io', name: 'kubernetes' },
  { icon: mobx, url: 'https://mobx.js.org/', name: 'mobx' },
  { icon: openapi, url: 'https://www.openapis.org/', name: 'openapi' },
  { icon: es, url: 'https://www.elastic.co/', name: 'es' },
  { icon: circleci, url: 'https://www.circleci.com/', name: 'circleci' },
  { icon: githubactions, url: 'https://github.com/features/actions', name: 'gha' },
  { icon: vite, url: 'https://vite.dev', name: 'vite' },
  { icon: vitest, url: 'https://vitest.dev', name: 'vitest' },
];

type Props = { tools?: ToolItem[] };

const Tools: React.FC<Props> = ({ tools = defaultTools }) => {
  return (
    <div className="mdl-grid content" id="tools">
      <h2 className="mdl-cell mdl-cell--2-offset-desktop mdl-cell--8-col">Tools</h2>
      <h4 className="mdl-cell mdl-cell--2-offset-desktop mdl-cell--8-col">
        some of the Tools i use on a regular base.
      </h4>

      <div className="mdl-cell mdl-cell--2-offset-desktop mdl-cell--8-col">
        {tools.map((t) => (
          <a
            className="mdl-button mdl-js-button mdl-button--raised mdl-button--fab mdl-js-ripple-effect"
            key={t.url}
            href={t.url}
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon={t.icon} name={t.name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tools;
