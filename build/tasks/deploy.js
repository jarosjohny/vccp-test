var config = require('../config').deploy,

    gulp = require('gulp'),
    gutil = require('gulp-util'),
    notify = require('gulp-notify'),
    ftp = require('gulp-ftp'),

    task = function() {
        return gulp.src(config.src)
            .pipe(ftp({
                host: config.host,
                user: config.user,
                pass: config.pass,
                port: config.port,
                remotePath: config.remotePath
            }))
            .pipe(notify('Deploy has been succeeded.'))
            .pipe(gutil.noop())
    };

gulp.task('deploy', task);
