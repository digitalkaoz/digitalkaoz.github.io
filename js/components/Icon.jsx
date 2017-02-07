import React from 'react'
import './../../style/icon.scss'

const Icon = ({icon, name}) => {
    const className = name ? 'icon-' + name : '';

    return React.createElement(icon, {className: 'icon ' + className})
}

Icon.propTypes = {
    icon: React.PropTypes.func,
    name: React.PropTypes.string
};

export default Icon;
