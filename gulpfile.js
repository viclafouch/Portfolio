/*----------  Récupération des modules  ----------*/

const gulp = require('gulp'),
	compass = require('gulp-compass'),
	autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),
	cleanCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify');
	imagemin = require('gulp-imagemin');

/*----------  Styles  ----------*/

// Compass task
gulp.task('styles', function() {
	return gulp.src(['public/assets/scss/*.scss'])
		.pipe(compass({
		 	css: 'public/assets/css',
			sass: 'public/assets/scss',
			image: 'public/assets/img'
		}))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    	.pipe(gulp.dest('public/assets/css'))
    	.pipe(rename({ suffix: '.min' }))
    	.pipe(cleanCSS({compatibility: 'ie8'}))
    	.pipe(gulp.dest('public/assets/css/min'));
});

/*----------  Images  ----------*/

// Compressed task
gulp.task('image', function() {
	return gulp.src(['public/assets/img/*'])
		.pipe(imagemin())
		.pipe(gulp.dest('public/assets/imgComp'));
});

/*----------  Scripts  ----------*/

gulp.task('scripts', function() {
	return gulp.src('public/assets/js/*.js')
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('public/assets/js/min'))
});

/*----------  Live  ----------*/

// Watch task
gulp.task('watch', function() {
	gulp.watch('./public/assets/scss/*.scss', ['styles']);
	gulp.watch('./public/assets/js/*.js', ['scripts']);
});

/*----------  Defaut  ----------*/

// Default task
gulp.task('default', ['image', 'styles', 'scripts', 'watch']);