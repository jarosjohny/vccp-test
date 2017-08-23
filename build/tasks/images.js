var config = require('../config'),
    notification = require('../utils/notification'),
    paths = require('../utils/paths')('images'),

    comparison = require('dir-compare'),
    filter = require('gulp-filter'),
    gutil = require('gulp-util'),
    gulp = require('gulp'),
    path = require('path'),
    image = require('gulp-image'),
    imagemin = require('gulp-imagemin'),
    svgmin = require('gulp-svgmin'),

    options = {
        notification: {
            title: 'Images Error',
            message: '<%= error.message =>'
        },
        compare: {
            excludeFilter: '.*, sprite.svg'
        },
    },

    optimise = function () {
        return gulp
            .src(paths.src)
            .pipe(image({
                pngquant: true,
                jpegoptim: true,
                svgo: true
            }).on('error', notification(options.notification)))
            .pipe(gulp.dest(paths.dest))
    },

    diff = function () {
        var src = [config.root.src, config.tasks.images.src].join('/'),
            dest = [config.root.dest, config.tasks.images.dest].join('/');

        return comparison
            .compare(src, dest, options.compare)
            .then(function(result) {
                if (!result.differencesFiles) {
                    return;
                }

                gutil.log(gutil.colors.red('Unexpected files in destination directory:'));

                var i = 0
                result.diffSet
                    .filter(function(_diff) {
                        return _diff.type1 === 'missing';
                    })
                    .forEach(function(_diff) {
                        gutil.log(gutil.colors.yellow('[' + i + '] ' + [_diff.path2, _diff.name2].join('/').replace(dest + '/', '')));
                        i++;
                    });

                gutil.log(gutil.colors.red('Count: ' + i));
            });
    };

gulp.task('images.diff', diff);
gulp.task('images', ['images.diff'], optimise);
