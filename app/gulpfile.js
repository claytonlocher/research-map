'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      del = require('del');

//--Styles-------------------------------------------------

  // Delete contents of "dist" CSS directory
  gulp.task('styles:clean', function() {
    del.sync('./dist/css/**/*.css');
  });

  // Convert SASS to CSS
  gulp.task('styles:compile', ['styles:clean'], function() {
    return gulp.src('./public/src/css/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./public/dist/css'));
  });

  // Watch SASS files to compile on save
  gulp.task('styles:watch', ['styles:compile'], function() {
    gulp.watch('./public/src/css/*.scss', ['styles:compile']);
  });

  // Trigger styles clean, compile, and watch
  gulp.task('styles', ['styles:watch']);


//--Scripts------------------------------------------------

  // Delete the contents of "dist" JS directory
  gulp.task('scripts:clean', function() {
    del.sync('./public/dist/js/**/*.js');
  });

  // Copy contents of JS "src" to JS "dist"
  gulp.task('scripts:transfer', ['scripts:clean'], function() {
    return gulp.src(['./public/src/js/*.js'])
      .pipe(gulp.dest('./public/dist/js'));
  });

  gulp.task('scripts', ['scripts:transfer']);


//--Images-------------------------------------------------

  // Optimize any static images

  

//---------------------------------------------------------

gulp.task('default', ['styles', 'scripts']);
