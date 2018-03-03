// Include gulp
var gulp = require('gulp');

// Define main directories
var assets = 'assets/';
var destination = 'dist/';

// Concatenate & Minify JS
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var stripDebug = require('gulp-strip-debug');


gulp.task('scripts', function() {
  return gulp.src([
                   assets + 'js/jquery-2.1.1.js',
                   assets + 'js/royal_preloader.min.js',
                   assets + 'js/vendor/particleground.js',
                   assets + 'js/plugins.js',
                   assets + 'js/masonry.js',
                   assets + 'js/isotope.js',
                   assets + 'js/letters.js',
                   assets + 'js/jquery.themepunch.tools.min.js',
                   assets + 'js/jquery.themepunch.revolution.min.js',
                   assets + 'js/jquery.themepunch.revolution.min.js',
                   ])
    .pipe(concat('main.js'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest(destination + 'js'));
});

gulp.task('extensions', function() {
  return gulp.src([
                   assets + 'js/extensions/revolution.extension.actions.min.js',
                   assets + 'js/extensions/revolution.extension.carousel.min.js',
                   assets + 'js/extensions/revolution.extension.kenburn.min.js',
                   assets + 'js/extensions/revolution.extension.layeranimation.min.js',
                   assets + 'js/extensions/revolution.extension.migration.min.js',
                   assets + 'js/extensions/revolution.extension.navigation.min.js',
                   assets + 'js/extensions/revolution.extension.parallax.min.js',
                   assets + 'js/extensions/revolution.extension.slideanims.min.js',
                   assets + 'js/extensions/revolution.extension.video.min.js',
                   ])
    .pipe(concat('extensions.js'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest(destination + 'js'));
});

// Preprocess CSS
var path = require('path');
var minifyCss = require('gulp-minify-css');

gulp.task('css', function() {
  return gulp.src([assets + 'css/base.css',
                   assets + 'css/skeleton.css',
                   assets + 'css/layout.css',
                   assets + 'css/color.css',
                   assets + 'css/font-awesome.css',
                   assets + 'css/et-line.css',
                   assets + 'css/ionicons.min.css',
                   assets + 'css/owl.carousel.css',
                   assets + 'css/owl.transitions.css',
                   assets + 'css/retina.css',
                   assets + 'css/settings.css',
                   assets + 'css/layers.css',
                   assets + 'css/navigation.css',
                   ])
    .pipe(concat('main.css'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(minifyCss())
    .pipe(gulp.dest(destination + 'css'))
});

// Images optimization
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

gulp.task('imagesCompression', function() {
  return gulp.src(assets + 'images/**/*')
    .pipe(cache(imagemin({
      optimizationLevel: 7,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest(destination + 'images'));
});

gulp.task('copy', function() {
  return gulp.src([
                    assets + 'js/custom*.js',
                    assets + 'js/modernizr*.js',
                    assets + 'css/font/*.js',
                    assets + 'font/**/*.js',
                  ])
    .pipe(gulp.dest(destination + 'js'));
});

// Watch for changes in our custom assets
gulp.task('watch', function() {
  // Watch .js files
  gulp.watch(assets + 'js/*.js', ['scripts']);
  gulp.watch(assets + 'js/custom*.js', ['copy']);
  gulp.watch(assets + 'js/vendor/*.js', ['scripts']);
  // Watch .less files
  gulp.watch(assets + 'css/*.css', ['css']);
  // Watch image files
  gulp.watch(assets + 'images/**/*', ['imagesCompression']);
});

// Run python server on localhost:8000
var serverCommand = 'python -m SimpleHTTPServer';

var shell = require('gulp-shell');
gulp.task('runServer', shell.task([
  serverCommand
]))

// Default Task
gulp.task('default', ['scripts', 'extensions', 'css', 'copy', 'imagesCompression']);