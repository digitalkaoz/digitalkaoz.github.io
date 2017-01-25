import React from 'react';
import Icon from './Icon.jsx';

import './../../style/tools.scss';
import aws from './../../node_modules/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg';
import angular from './../../node_modules/devicon/icons/angularjs/angularjs-plain-wordmark.svg';
import docker from './../../node_modules/devicon/icons/docker/docker-plain.svg';
import git from './../../node_modules/devicon/icons/git/git-plain.svg';
import html5 from './../../node_modules/devicon/icons/html5/html5-plain.svg';
import javascript from './../../node_modules/devicon/icons/javascript/javascript-plain.svg';
import java from './../../node_modules/devicon/icons/java/java-plain.svg';
import linux from './../../node_modules/devicon/icons/linux/linux-plain.svg';
import mysql from './../../node_modules/devicon/icons/mysql/mysql-plain.svg';
import nodejs from './../../node_modules/devicon/icons/nodejs/nodejs-plain.svg';
import php from './../../node_modules/devicon/icons/php/php-plain.svg';
import react from './../../node_modules/devicon/icons/react/react-original.svg';
import redis from './../../node_modules/devicon/icons/redis/redis-plain.svg';
import sass from './../../node_modules/devicon/icons/sass/sass-original.svg';
import symfony from './../../node_modules/devicon/icons/symfony/symfony-original.svg';
import typescript from './../../node_modules/devicon/icons/typescript/typescript-plain.svg';
import travis from './../../node_modules/devicon/icons/travis/travis-plain.svg';
import es from './../../images/elasticsearch.svg';

export default class extends React.Component {

    static defaultProps = {
        tools: [
            {icon: javascript, url: 'https://www.javascript.com/'},
            {icon: typescript, url: 'https://www.typescriptlang.org/', name: 'typescript'},
            {icon: php, url: 'http://www.php.net/'},
            {icon: java, url: 'https://www.java.com'},
            {icon: nodejs, url: 'https://nodejs.org/en/'},

            {icon: aws, url: 'https://aws.amazon.com'},
            {icon: docker, url: 'https://www.docker.com/'},
            {icon: linux, url: 'https://www.linuxfoundation.org/', name: 'linux'},
            {icon: git, url: 'https://git-scm.com/'},
            {icon: travis, url: 'https://travis-ci.org/'},

            {icon: angular, url: 'https://angular.io/'},
            {icon: react, url: 'https://facebook.github.io/react/'},
            {icon: symfony, url: 'http://symfony.com/', name: 'symfony-original'},
            {icon: html5, url: 'http://caniuse.com/'},
            {icon: sass, url: 'http://sass-lang.com/'},

            {icon: mysql, url: 'https://www.mysql.com/'},
            {icon: redis, url: 'https://redis.io/'},
            {icon: es, url: 'https://www.elastic.co/', name: 'es'},

        ]
    };
    render() {
        return <div className="mdl-grid content" id="tools">
            <h2 className="mdl-cell mdl-cell--2-offset-desktop mdl-cell--8-col">Tools</h2>
            <h4 className="mdl-cell mdl-cell--2-offset-desktop mdl-cell--8-col">some of the Tools i use on a regular base.</h4>
            <div className="mdl-cell mdl-cell--2-offset-desktop mdl-cell--8-col">
                { this.props.tools.map((t) => { return <a className="mdl-button mdl-js-button mdl-button--raised mdl-button--fab mdl-js-ripple-effect" key={t.url} href={t.url} target="_blank"><Icon icon={t.icon} name={t.hasOwnProperty('name') ? t.name : null}/></a> })}
            </div>
        </div>
    }
}
