"use strict";

// Include gulp
var gulp = require('gulp');

// Include plugins
var jasmine     = require('gulp-jasmine');
var uglify      = require('gulp-uglify');
var source      = require('vinyl-source-stream'); // makes browserify bundle compatible with gulp
var streamify   = require('gulp-streamify');
var browserify  = require('browserify');


// Test JS
gulp.task('specs', function () {
    return gulp.src('assets/js/spec/*.js')
        .pipe(jasmine());
});

// Concatenate, Browserify
gulp.task('scripts', function() {
    return browserify('./assets/js/app.js')
        .bundle()
        .pipe(source('all.min.js'))
        .pipe(gulp.dest('./public/'));
});

gulp.task('watch', function () {
    gulp.watch('./assets/**/*.js', ['specs', 'scripts']);
});

gulp.task('default', ['specs', 'scripts']);