'use strict';

var gulp = require('gulp');
var	gutil = require('gulp-util');
var	gulp_if = require('gulp-if');
var	browserSync = require('browser-sync').create();
var	sourcemaps = require('gulp-sourcemaps');
var	sass = require('gulp-sass');
var	uglify = require('gulp-uglify');
var	browserify = require('browserify');
var	source = require('vinyl-source-stream');
var	buffer = require('vinyl-buffer');
var	config = require('./config');

gulp.task('default', ['watch']);

gulp.task('watch', function() {
	gulp.watch( config.paths.sass.src, ['sass'] );
});

gulp.task('sass', function() {
	gulp
		.src(config.paths.sass.src)
		.pipe(sourcemaps.init())
		.pipe(sass( config.options.sass ).on('error', sass.logError))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest( config.paths.sass.dest));
});
