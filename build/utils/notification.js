var config = require('../config'),
    notify = require('gulp-notify'),
    path = require('path');

module.exports = function(opts) {
    return notify.onError({
        title: opts.title,
        subtitle: opts.subtitle,
        message: opts.message,
        open: opts.open,
        onLast: true,
    })
}
