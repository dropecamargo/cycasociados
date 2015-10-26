/*
* include dependencies
*/
var gulp = require('gulp'),
		jshint = require('gulp-jshint'),
		uglify = require('gulp-uglify'),
		concat = require('gulp-concat'),
		minifyCss = require('gulp-minify-css'),
		less = require('gulp-less'),
		livereload = require('gulp-livereload'),
		path = require('path');

// compress modernizr
gulp.task('modernizr', function () {
	return gulp.src('./app/libs/modernizr/src/**.js')
				.pipe( concat('modernizr.min.js') )
				.pipe( uglify() )
				.pipe( gulp.dest('./wp-content/themes/cycasociados/js/vendor') );
});
// compress jquery-ui
gulp.task('compress:jqueryui', function () {
	return gulp.src([
							'./app/libs/jquery.ui/ui/core.js',
							'./app/libs/jquery.ui/ui/widget.js',
							'./app/libs/jquery.ui/ui/menu.js',
							'./app/libs/jquery.ui/ui/button.js',
							'./app/libs/jquery.ui/ui/mouse.js',
							'./app/libs/jquery.ui/ui/draggable.js',
							'./app/libs/jquery.ui/ui/resizable.js',
							'./app/libs/jquery.ui/ui/position.js',
							'./app/libs/jquery.ui/ui/effect.js',
							'./app/libs/jquery.ui/ui/autocomplete.js',
							'./app/libs/jquery.ui/ui/dialog.js'
						])
				.pipe( concat('jquery.ui.min.js') )
				.pipe( uglify() )
				.pipe( gulp.dest('./wp-content/themes/cycasociados/js/vendor') );
});
// compress javascript libraries
gulp.task('compress:vendor', function() {
	return gulp.src([
							'./app/libs/bootstrap/dist/js/bootstrap.js'
						])
				.pipe( concat('vendor.min.js') )
				.pipe( uglify({mangle: false}) )
				.pipe( gulp.dest('./wp-content/themes/cycasociados/js/vendor') );
});
// compress javascript application
gulp.task('compress:app', ['modernizr','compress:jqueryui','compress:vendor'], function() {
	return gulp.src([
							'./app/public/scripts/helpers/misc.js',
							'./app/public/scripts/helpers/events-priority.js',
							'./app/public/scripts/init.js',
							'./app/public/scripts/animated.js'
						])
				.pipe( concat('app.min.js') )
				.pipe(uglify({
					mangle: false,
					compress: false
				}))
				.pipe( gulp.dest('./wp-content/themes/cycasociados/js') )
				.pipe( livereload() );
});

// compile less styles of the application
gulp.task('less:app', function () {
  return gulp.src('./app/less/app.less')
				.pipe(less({
					paths: [ path.join(__dirname, 'app', 'libs') ]
				}))
				.pipe( concat('style.css') )
				.pipe( minifyCss() )
				.pipe( gulp.dest('./wp-content/themes/cycasociados') )
				.pipe( livereload() );
});

// Minify css jquery-ui
gulp.task('css-jqueryui', function() {
	return gulp.src([
								'./app/libs/jquery.ui/themes/base/all.css'
							])
				.pipe( minifyCss({compatibility: 'ie8'}) )
				.pipe( concat('jquery.ui.min.css') )
				.pipe( gulp.dest('./wp-content/themes/cycasociados/css') );
});
// Minify css files
gulp.task('minify-css', function() {

	gulp.start('css-jqueryui');

	return gulp.src([
								'./app/libs/mdi/css/materialdesignicons.css'
							])
				.pipe( concat('vendor.min.css') )
				.pipe( minifyCss({compatibility: 'ie8'}) )
				.pipe( gulp.dest('./wp-content/themes/cycasociados/css') );
});

// copying
gulp.task('copy', function () {
	//move jQuery file to public/js/vendor/ directory
	gulp.src( ['./app/libs/jquery/dist/jquery.min.js'] )
			.pipe( gulp.dest('./wp-content/themes/cycasociados/js/vendor/') );

	// move slick fonts to public/css/ directory
	gulp.src( ['./app/libs/mdi/fonts/**'] )
			.pipe( gulp.dest('./wp-content/themes/cycasociados/css/fonts/') );
});


// watcher task of other tasks
gulp.task('watch', function () {

	livereload.listen({port:8080, host:'localhost', basePath: 'cycasociados'});
	gulp.watch(['./app/**/**.js', './Gulpfile.js'], ['compress:app']);
	gulp.watch(['./app/**/**.less'], ['less:app']);

});

// Register default task
gulp.task('default', ['less:app', 'minify-css', 'compress:app', 'copy', 'watch']);

