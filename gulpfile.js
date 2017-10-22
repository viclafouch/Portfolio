/*----------  Récupération des modules  ----------*/

const inProduction = false;

const gulp = require('gulp'),
	compass = require('gulp-compass'),
	autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),
	cleanCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat'),
	print = require('gulp-print'),
	runSequence = require('run-sequence'),
	imagemin = require('gulp-imagemin');

/*----------  Styles  ----------*/

// Compass task
gulp.task('styles', function() {
	return gulp.src(['public/assets/scss/*.scss'])
		.pipe(compass({
		 	css: 'public/assets/css',
			sass: 'public/assets/scss',
			config_file: './config.rb',
		}))
		.on('error', function(error) {
	      console.log(error);
	      this.emit('end');
	    })
	    .pipe(print(function(filepath) {
	      return "file created : " + filepath;
	    }))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    	.pipe(gulp.dest('public/assets/css'))
    	.pipe(rename({ suffix: '.min' }))
    	.pipe(cleanCSS({compatibility: 'ie8'}))
    	.pipe(gulp.dest('public/assets/css'));
});

/*----------  Images  ----------*/	

// // Compressed task
// gulp.task('image', function() {
// 	return gulp.src(['public/assets/img/*'])
// 		.pipe(imagemin())
// 		.pipe(gulp.dest('public/assets/imgComp'));
// });

/*----------  Scripts  ----------*/

if (!inProduction) {

	gulp.task('myJs', function() {
		return gulp.src('public/assets/js/*.js')
			.pipe(sourcemaps.init())
	 		.pipe(babel({
	            presets: ['es2015']
	        }))
			.pipe(uglify().on('error', function(e){
		         console.log(e);
		    }))
			.pipe(rename({ suffix: '.min' }))
			.pipe(gulp.dest('public/assets/js/min'))

			.pipe(print(function(filepath) {
		      return "file created : " + filepath;
		    }))
	});
}
else {
	gulp.task('myJs', function() {
		return gulp.src('public/assets/js/*.js')
			.pipe(sourcemaps.init())
			.pipe(rename({ suffix: '.min' }))
			.pipe(gulp.dest('public/assets/js/min'))

			.pipe(print(function(filepath) {
		      return "file created : " + filepath;
		    }))
	});
}

gulp.task('concat', function() {
  gulp.src(['public/lib/turbolinks/*.js','public/assets/js/min/*.js'])
    .pipe(concat('script.min.js'))
    .pipe(gulp.dest('public/assets/js/min'));
});

gulp.task('scripts', function() {
	runSequence('myJs','concat');
});


gulp.task('default', ['styles', 'scripts', 'watch'], function() {
});

/*----------  Live  ----------*/

// Watch task
gulp.task('watch', function() {
	gulp.watch('./public/assets/scss/*.scss', ['styles']);
	gulp.watch('./public/assets/js/*.js', ['scripts']);
});

/*----------  Defaut  ----------*/