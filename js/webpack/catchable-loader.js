const Loader = require('extract-text-webpack-plugin/loader');

module.exports = function(source) {
    return Loader(source);
};

module.exports.pitch = function (request) {
    try {
        return Loader.pitch.call(this, request);
    } catch (e) {
        return '';
    }
};
