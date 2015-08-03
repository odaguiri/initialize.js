// nodejs gulp plugins
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

// dir
var files = "./dist/*.js";

// set new gulp task as lint
gulp.task('lint', function(){
  // load files to gulp.src and use pipe to run jshint
  gulp.src(files)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// set new gulp task as dist
gulp.task('dist', function(){
  // load files to gulp.src and rename all min files with uglify
  // set all min files to build
  gulp.src(files)
    .pipe(concat('./dist'))
    .pipe(rename('dist.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch(files, function(event) {
    gulputil.log('File '+event.path+' was '+event.type+', running tasks...');
    gulp.run('dist');
    gulp.run('lint', 'dist');
  });
});