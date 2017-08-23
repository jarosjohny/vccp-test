var config = require('../config'),
    notification = require('../utils/notification'),
    paths = require('../utils/paths')('styles'),

    gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    minifycss = require('gulp-minify-css'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    util = require('gulp-util'),
    autoprefixer = require('gulp-autoprefixer'),
    neat = require('node-neat');

    options = {
        notification: {
            title: 'Sass error',
            subtitle: '<%= error.relativePath %>:<%= error.line %>',
            message: '<%= error.messageOriginal %>',
            open: 'file://<%= error.file %>'
        }
    },

    task = function () {
        return gulp
            .src(paths.src)
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(sass(config.tasks.styles.sass).on('error', notification(options.notification)))
            .pipe(rename({
                basename: config.sass.plugins.rename.basename,
                suffix: config.sass.plugins.rename.suffix
            }))
            .pipe(autoprefixer())
            .pipe(config.production ? minifycss() : util.noop())
            .pipe(!config.production ? sourcemaps.write() : util.noop())
            .pipe(gulp.dest(paths.dest))
            .pipe(notify("Styles task is done."))
    };

gulp.task('styles', task);
