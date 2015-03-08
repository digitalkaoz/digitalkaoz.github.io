//var React = require('react');
var IScroll = require('IScroll');
var parallax = require('./parallax.js');

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  new IScroll(document.body);
  parallax.init(document.querySelectorAll('.parallax'));
});
