'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      del = require('del');

//--Styles-------------------------------------------------

  // Delete contents of "dist" css directory
  gulp.task('styles:clean', function() {
    del.sync('./dist/css/**/*.css');
  });

  // Convert Sass to CSS
  gulp.task('styles:compile', ['styles:clean'], function() {
    return gulp.src('./public/src/css/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./public/dist/css'));
  });

  // Copy non-Sass contents of css "src" to css "dist"
  gulp.task('styles:transfer', ['styles:compile'], function() {
    return gulp.src(['./public/src/css/*.css'])
      .pipe(gulp.dest('./public/dist/css'));
  });

  // Watch Sass files to compile on save
  gulp.task('styles:watch', ['styles:transfer'], function() {
    gulp.watch(['./public/src/css/*.scss', './public/src/css/*.css'], ['styles:compile']);
  });

  // Trigger styles clean, compile, and watch
  gulp.task('styles', ['styles:watch']);


//--Scripts------------------------------------------------

  // Delete the contents of "dist" js directory
  gulp.task('scripts:clean', function() {
    del.sync('./public/dist/js/**/*.js');
  });

  // Copy contents of js "src" to js "dist"
  gulp.task('scripts:transfer', ['scripts:clean'], function() {
    return gulp.src(['./public/src/js/**/*.js', './public/src/js/**/*.js.map'])
      .pipe(gulp.dest('./public/dist/js'));
  });

  // Watch Sass files to compile on save
  gulp.task('scripts:watch', ['scripts:transfer'], function() {
    gulp.watch('./public/src/js/**/*.js', ['scripts:transfer']);
  });

  gulp.task('scripts', ['scripts:watch']);


//--Images-------------------------------------------------

  // TO DO: Optimize any static images

  // Delete the contents of "dist" js directory
  gulp.task('images:clean', function() {
    del.sync('./public/dist/img/**/*');
  });

  // Copy contents of img "src" to img "dist"
  gulp.task('images:transfer', ['images:clean'], function() {
    return gulp.src('./public/src/img/**/*')
      .pipe(gulp.dest('./public/dist/img'));
  });

  gulp.task('images', ['images:transfer']);


//---------------------------------------------------------

gulp.task('default', ['styles', 'scripts', 'images']);
