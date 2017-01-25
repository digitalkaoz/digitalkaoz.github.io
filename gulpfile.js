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
var minifyHTML = require('gulp-minify-html');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var sprity = require('sprity');
var autoprefixer = require('gulp-autoprefixer');
var gulpif = require('gulp-if');
var argv = require('yargs').argv;
var csso = require('gulp-csso');
var uncss = require('gulp-uncss');

var reload = browserSync.reload;

var opts = {
  mainJsInput: './js/app.js',
  mainStylesInput: ['./styles/app.scss'],
  buildFolder: './build/',
  watchedFiles: [
    './js/**/*',
    './styles/**/*',
    '_index.html',
    './images/*'
  ],
  svgSources: [
    './node_modules/devicon/icons/yii/*-plain.svg',
    './node_modules/devicon/icons/linux/*-plain.svg',
    './node_modules/devicon/icons/git/*-plain.svg',
    './node_modules/devicon/icons/gulp/*.svg',
    './node_modules/devicon/icons/javascript/*-plain.svg',
    './node_modules/devicon/icons/less/*.svg',
    './node_modules/devicon/icons/mongodb/*-plain.svg',
    './node_modules/devicon/icons/mysql/*-plain.svg',
    './node_modules/devicon/icons/nodejs/*-plain.svg',
    './node_modules/devicon/icons/php/*-plain.svg',
    './node_modules/devicon/icons/react/*-original.svg',
    './node_modules/devicon/icons/sass/*.svg',
    './node_modules/devicon/icons/symfony/*-original.svg',
    './node_modules/devicon/icons/html5/*-plain.svg',
    './node_modules/devicon/icons/docker/*-plain.svg',
    './node_modules/devicon/icons/travis/*-plain.svg',
    './node_modules/devicon/icons/redis/*-plain.svg',
    './node_modules/devicon/icons/doctrine/*-plain.svg',
    './node_modules/devicon/icons/angularjs/*-plain.svg',
    './node_modules/devicon/icons/github/*-original.svg',
    './node_modules/devicon/icons/google/*-plain.svg',
    './node_modules/devicon/icons/nginx/*-original.svg',
    './node_modules/devicon/icons/java/*-plain.svg',
    './images/*.svg'
  ]
};

var debug = !argv.prod;

var scripts = function(minify) {
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
  //del(opts.buildFolder + '/*', cb);
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
      path.basename = path.basename.replace('-plain-wordmark', '')
        .replace('-original-wordmark', '')
        .replace('-plain', '')
        .replace('-original', '')
      ;
    }
    ))
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
  ;

  function fileContents (filePath, file) {
      return file.contents.toString();
  }

  return gulp
    .src('./_index.html')
    .pipe(rename("index.html"))
    .pipe(inject(svgs, { transform: fileContents }))
    .pipe(minifyHTML())
    .pipe(gulp.dest('.'))
  ;
});

gulp.task('styles', ['sprite'], function() {
  gulp.src(opts.mainStylesInput)
  //.pipe(gulpif(debug, sourcemaps.init()))
  .pipe(sass({
    includePaths: ["./node_modules/"]
  }))
  //.pipe(gulpif(debug, sourcemaps.write()))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(uncss({
      html: ['_index.html']
  }))
  .pipe(csso({
      restructure: true,
      sourceMap: true,
      debug: debug
  }))
  .pipe(gulp.dest(opts.buildFolder))
  .pipe(reload({
    stream: true
  }))

});

gulp.task('images', function() {
  return gulp.src('./images/*.jpg')
  .pipe(imagemin({}))
  .pipe(gulp.dest(opts.buildFolder))
});

gulp.task('fonts', function() {
  return gulp.src('./node_modules/materialize-css/fonts/roboto/*')
  .pipe(gulp.dest(opts.buildFolder))
});

gulp.task('js', function() {
  var b = browserify({
    debug: debug
  });
  b.transform(reactify);
  b.add(opts.mainJsInput);

  if (!debug) {
    b.plugin('minifyify', {
      map: false
    });
  }

  return b.bundle()
  .pipe(source(opts.mainJsInput))
  .pipe(rename("app.js"))
  .pipe(buffer())
  .pipe(gulpif(debug, sourcemaps.init({
    loadMaps: true
  })))
  .pipe(gulpif(debug, sourcemaps.write(opts.buildFolder)))
  .pipe(gulp.dest(opts.buildFolder));

});

gulp.task('sprite', function() {
  return sprity.src({
    src: ['./images/references/*', './images/me.png'],
    base64: true,
    style: '_base64.scss',
//    cssPath: '../styles',
    processor: 'sass', 
    prefix: 'reference'
  })
  .pipe(gulp.dest('./styles'));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('build', ['clean', 'svg', 'images', 'fonts', 'js', 'styles'], function() {
  scripts(true);
});

gulp.task('default', ['svg', 'images', 'fonts', 'styles', 'js', 'browser-sync'], function() {
  gulp.watch(opts.watchedFiles, ['svg', 'images', 'styles', 'js', browserSync.reload]);
});
