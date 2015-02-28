var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var inject = require('gulp-inject');
var rename = require('gulp-rename');
var cheerio = require('gulp-cheerio');
var imagemin = require('gulp-imagemin');
var minifyHTML = require('gulp-minify-html')
var minifyCSS = require('gulp-minify-css');
var gzip = require('gulp-gzip');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');

var reload = browserSync.reload;

var opts = {
  mainJsInput: './js/app.js',
  mainStylesInput: ['./styles/app.scss'],
  buildFolder: './build/',
  watchedFiles: [
    './js/**/*',
    './styles/**/*',
    '_index.html'
  ],
  svgSources: [
    './node_modules/devicons/icons/bower/bower-plain-wordmark.svg',
    './node_modules/devicons/icons/bootstrap/*-plain-wordmark.svg',
    './node_modules/devicons/icons/linux/*-plain.svg',
    './node_modules/devicons/icons/git/*-plain-wordmark.svg',
    './node_modules/devicons/icons/gulp/*.svg',
    './node_modules/devicons/icons/javascript/*-plain.svg',
    './node_modules/devicons/icons/less/*.svg',
    './node_modules/devicons/icons/mongodb/*-plain-wordmark.svg',
    './node_modules/devicons/icons/mysql/*-plain-wordmark.svg',
    './node_modules/devicons/icons/nodejs/*-plain-wordmark.svg',
    './node_modules/devicons/icons/php/*-plain.svg',
    './node_modules/devicons/icons/react/*-original-wordmark.svg',
    './node_modules/devicons/icons/sass/*.svg',
    './node_modules/devicons/icons/symfony/*-original-wordmark.svg',
    './node_modules/devicons/icons/apple/*.svg',
    './node_modules/devicons/icons/html5/*-plain-wordmark.svg',
    './images/*.svg'
  ]
};

function styles(minify) {
  var stream = gulp.src(opts.mainStylesInput)
  .pipe(sass({
    includePaths: ["./node_modules/"]
  }));

  if (minify) {
    return stream
    .pipe(minifyCSS())
    .pipe(gulp.dest(opts.buildFolder))
    ;
  }

  return stream
  .pipe(gulp.dest(opts.buildFolder))
  .pipe(reload({
    stream: true
  }))
}

function scripts(minify) {
  var b = browserify({
    debug: !minify
  });
  b.transform(reactify);
  b.add(opts.mainJsInput);

  if (minify) {
    b.plugin('minifyify', {
      map: false
    });
    return b.bundle()
    .pipe(source(opts.mainJsInput))
    .pipe(rename("app.js"))
    .pipe(gulp.dest(opts.buildFolder));
  }

  return b.bundle()
  .pipe(source(opts.mainJsInput))
  .pipe(rename("app.js"))
  .pipe(buffer())
  .pipe(sourcemaps.init({
    loadMaps: true
  }))
  .pipe(sourcemaps.write(opts.buildFolder))
  .pipe(gulp.dest(opts.buildFolder));
}

gulp.task('clean', function(cb) {
  del(opts.buildFolder, cb);
});

gulp.task('svg', function() {
  var svgs = gulp
  .src(opts.svgSources)
  .pipe(cheerio({
    run: function($) {
      $('[fill]').removeAttr('fill');
    },
    parserOptions: {
      xmlMode: true
    }
  }))
  .pipe(rename(function(path) {
    path.prefix = "icon-";
    path.basename = path.basename.replace('-plain-wordmark', '');
    path.basename = path.basename.replace('-original-wordmark', '');
    path.basename = path.basename.replace('-plain', '');
    path.basename = path.basename.replace('-original', '');
  }
  ))
  .pipe(svgmin())
  .pipe(svgstore({
    inlineSvg: true
  }))
  .pipe(cheerio(function($) {
    $('svg').attr('style', 'display:none');
  }))
  ;

  function fileContents(filePath, file) {
    return file.contents.toString();
  }

  return gulp
  .src('./_index.html')
  .pipe(minifyHTML({
    comments: true
  }))
  .pipe(inject(svgs, {
    transform: fileContents
  }))
  .pipe(rename("index.html"))
  .pipe(gulp.dest('.'));
});

gulp.task('styles', function() {
  return styles(false);
});

gulp.task('images', function() {
  return gulp.src('./images/*')
  .pipe(imagemin({}))
  .pipe(gulp.dest(opts.buildFolder))
});

gulp.task('fonts', function() {
  return gulp.src('./node_modules/materialize-css/font/roboto/*')
  .pipe(gulp.dest(opts.buildFolder))
});

gulp.task('js', function() {
  return scripts(false);
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('build', ['clean', 'svg', 'images', 'fonts'], function() {
  styles(true);
  scripts(true);
});

gulp.task('default', ['clean', 'svg', 'images', 'fonts', 'styles', 'js', 'browser-sync'], function() {
  gulp.watch(opts.watchedFiles, ['svg', 'styles', 'js', browserSync.reload]);
});
