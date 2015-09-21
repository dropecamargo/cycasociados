/*
* Gulp Dependencies
*/
var gulp = require('gulp'),
		less = require('gulp-less'),
		concat = require('gulp-concat'),
    livereload = require('gulp-livereload');


/*
* Configure tasks
*/

// Compiler less
gulp.task('less', function() {
  gulp.src(['./app/stylesheets/app.less'])
			.pipe(less())
			.pipe(gulp.dest('./public/css/'))
			.pipe(livereload());
});

// html task
gulp.task('html', function() {
  gulp.src('./app/**.html');
  		.pipe(livereload());
});

// watch task
gulp.task('watch', function () {
	livereload.listen();
	gulp.watch(['./app/**.html'], ['html']);
	gulp.watch('./app/**/*.less', ['less']);
});

// Default task
gulp.task('default', ['less', 'watch']);