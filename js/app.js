//var React = require('react');

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function getWindowSize() {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0];

  return {
    width: w.innerWidth || e.clientWidth || g.clientWidth,
    height: w.innerHeight || e.clientHeight || g.clientHeight
  };
}

function offset(elt) {
  var rect = elt.getBoundingClientRect(),
    bodyElt = document.body;

  return {
    top: rect.top + bodyElt .scrollTop,
    left: rect.left + bodyElt .scrollLeft
  }
}

function getHeight(elem) {
  return Math.max(elem.offsetHeight, elem.clientHeight);
}

function parallax(query) {
  var window_width = getWindowSize.width;

  Array.prototype.forEach.call(document.querySelectorAll(query), function(item, i) {
    item.classList.add('parallax');

    Array.prototype.forEach.call(item.querySelectorAll('img'), function(img, i) {
      img.style.backgroundImage = 'url(' + img.src + ')';
      img.src = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
    });

    function updateParallax(initial) {
      var container_height;
      var image = item.querySelector('img');
      if (window_width < 992) {
        container_height = (getHeight(item) > 0) ? getHeight(item) : getHeight(image);
      } else {
        container_height = (getHeight(item) > 0) ? getHeight(item) : 500;
      }
      var img_height = getHeight(image);
      var parallax_dist = img_height - container_height;
      var bottom = offset(item).top + container_height;
      var top = offset(item).top;
      var scrollTop = window.pageYOffset;
      var windowHeight = window.innerHeight;
      var windowBottom = scrollTop + windowHeight;
      var percentScrolled = (windowBottom - top) / (container_height + windowHeight);
      var parallax = -1 * parallax_dist * percentScrolled;

      if ((bottom > scrollTop) && (top < (scrollTop + windowHeight))) {
        image.style.bottom = parallax + "px";
      }
      if (initial) {
        image.style.display = "block";
      }
    }

    // Wait for image load
    Array.prototype.forEach.call(item.querySelectorAll('img'), function(img, i) {
      img.addEventListener('load', function() {
        updateParallax(true);
      });
      if (img.complete) {
        img.dispatchEvent(new Event('load'));
      }
    });

    window.addEventListener('scroll', function() {
      window_width = getWindowSize.width;
      updateParallax(false);
    });

    window.addEventListener('resize', function() {
      window_width = getWindowSize.width;
      updateParallax(false);
    });
  });
}
;

ready(function() {
  parallax('.parallax');
});
