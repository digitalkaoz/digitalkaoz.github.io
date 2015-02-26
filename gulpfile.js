var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var reload = browserSync.reload;

var opts = {
  mainJsInput: './js/app.js',
  mainStylesInput: './styles/app.scss',
  buildFolder: './build/',
  watchedFiles: [
    './js/**/*',
    './styles/**/*',
    'index.html'
  ]
};

gulp.task('styles', function() {
  return gulp.src(opts.mainStylesInput)
  .pipe(sass())
  .pipe(gulp.dest(opts.buildFolder))
  .pipe(reload({
    stream: true
  }));
});

gulp.task('fonts', function() {
  return gulp.src('./node_modules/socicon/font/*')
  .pipe(gulp.dest(opts.buildFolder))
});

gulp.task('js', function() {
  var b = browserify();
  b.transform(reactify);
  b.add(opts.mainJsInput);
  return b.bundle()
  .pipe(source(opts.mainJsInput))
  .pipe(gulp.dest(opts.buildFolder));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('default', ['browser-sync', 'fonts', 'styles', 'js'], function() {
  gulp.watch(opts.watchedFiles, ['styles', 'js', browserSync.reload]);
});
