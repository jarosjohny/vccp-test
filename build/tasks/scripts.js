var config = require('../config'),
    paths = require('../utils/paths')('scripts'),

    gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    sourcemaps = require('gulp-sourcemaps'),
    util = require('gulp-util'),

    task = function() {
        return gulp
            .src(config.tasks.scripts.files)
            .pipe(sourcemaps.init())
            .pipe(concat('main.js'))
            .pipe(config.production ? util.noop() : sourcemaps.write())
            .pipe(rename({suffix: '.min'}))
            .pipe(config.production ? util.noop() : uglify())
            .pipe(gulp.dest(paths.dest))
            .pipe(notify("Scripts task is done."))
    };

gulp.task('scripts', task);
