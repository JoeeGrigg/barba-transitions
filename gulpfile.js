/*
  Gulp Setup
*/

var gulp            = require('gulp'),
    concat          = require('gulp-concat'),
    jshint          = require('gulp-jshint'),
    notify          = require('gulp-notify'),
    plumber         = require('gulp-plumber'),
    replace         = require('gulp-replace'),
    sequence        = require('gulp-sequence'),
    sourcemaps      = require('gulp-sourcemaps'),
    uglify          = require('gulp-uglify'),
    fs              = require('fs'),
    path            = require('path'),
    rename          = require('gulp-rename');

//
// JS
//

src = [
  './src/transition.js',
  './src/transition-init.js'
];

gulp.task('js', function(){
  return gulp.src(src)
    .pipe(plumber(plumberErrorHandler))
    .pipe(sourcemaps.init())
    .pipe(concat('barba.transitions.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(concat('barba.transitions.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
    .pipe(sourcemaps.write('.'));
});

gulp.task('js-dev', function(){
  return gulp.src(src)
    .pipe(plumber(plumberErrorHandler))
    .pipe(sourcemaps.init())
    .pipe(concat('barba.transitions.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./example/temp'))
    .pipe(sourcemaps.write('.'));
});

//
// Watch
//

gulp.task('watch', function() {

  gulp.watch('src/**/*.js', ['js-dev']);

});

//
// Error Handling
//

var plumberErrorHandler = { errorHandler: notify.onError({
  title: 'Gulp',
  message: 'Error: <%= error.message %>'
  })
};

//
// Build Tasks
//

gulp.task('default', sequence(['js-dev', 'watch']));
gulp.task('install', sequence(['js']));
