// gulp bootstrap
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

// default dir
var dir = "./src/initialize.js";

// jshint task
gulp.task('lint', function(){
  return gulp.src(dir)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// beautify task
gulp.task('beautify', function(){
  gulp.src(dir)
    .pipe(concat('./src'))
    .pipe(rename('initialize.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./src'));
});

// watch task
gulp.task('watch', function() {
  gulp.watch(dir, ['lint', 'beautify']);
});

// default task
gulp.task('default', ['lint', 'beautify', 'watch']);
