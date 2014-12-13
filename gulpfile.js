var gulp = require('gulp'),
  karma = require('karma').server,
  jsFiles = ['ngx/**/*.js'];


/**
 * Run test once and exit
 */
gulp.task('test-js', function (done) {
  karma.start({
    configFile: __dirname + '/karma-unit.conf.js',
    singleRun: true
  }, done);
});

/**
 * Validate JavaScript
 */

gulp.task('jshint-js', function () {
  gulp.src(jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
});

gulp.task('process-js', ['jshint-js', 'test-js']);

gulp.task('test', ['test-js']);

/**
 * Run tests on every change
 */
gulp.task('watch', function () {
  gulp.watch(jsFiles, ['process-js']);
});

/**
 * Default task
 */
gulp.task('default', ['watch']);