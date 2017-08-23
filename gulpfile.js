const gulp = require('gulp'),
      requireDir = require('require-dir');

requireDir('./build/tasks', {recurse: true});

gulp.task('watch', function () {
    gulp.start('styles', 'scripts'); // For the first interaction
    gulp.watch(['./assets/sass/*.scss', './assets/sass/**/*.scss'], ['styles']);
    gulp.watch(['./assets/js/*.js', './assets/js/*/**.js'], ['scripts']);
});

gulp.task('default', ['styles', 'scripts', 'images']);
