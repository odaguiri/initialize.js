// gulp bootstrap
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

// default dir
var dir = "./dist/initialize.js";

// jshint task
gulp.task('lint', function(){
  return gulp.src(dir)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// dist task
gulp.task('dist', function(){
  gulp.src(dir)
    .pipe(concat('./dist'))
    .pipe(rename('initialize.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

// watch task
gulp.task('watch', function() {
  gulp.watch(dir, ['lint', 'dist']);
});

// default task
gulp.task('default', ['lint', 'dist', 'watch']);
