var { html } = require('js-beautify');
const micromatch = require('micromatch');

module.exports = (hexo) =>
    function (str, data) {
        const config = hexo.config.html_prettify;

        const path = data.path;

        if (path && config.exclude && config.exclude.length > 0 && micromatch.isMatch(path, config.exclude)) {
            return str;
        } else {
            return html(str, config.options);
        }
    };
