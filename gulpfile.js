var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');


gulp.task('sass', function(){
	return setTimeout(() => {
		gulp.src('app/css/style.sass')
			.pipe(sass())
			.pipe(gulp.dest('app/css'))
			.pipe(browserSync.reload({
				stream: true
			}))
	}, 1000); 
});

gulp.task('browser-sync', function(){
	browserSync.init({
			server: {
					baseDir: 'app'
			}
	})
})

gulp.task('watch', ['sass', 'browser-sync'], function(){
	gulp.watch('app/css/*.sass', ['sass']);
	gulp.watch('app/**/*.html', browserSync.reload);
	gulp.watch('app/**/*.js', browserSync.reload);
})

// Building for Production

gulp.task('assets-build', function(){
	return gulp.src('app/**/*.+(js|css|html)')
	// .pipe(gulpIf('*.js', uglify()))
	.pipe(gulpIf('*.css', cssnano()))
	.pipe(gulp.dest('dist'))
})

gulp.task('images', function(){
	return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg|mp4)')
	.pipe(cache(imagemin({
		interlaced: true
	})))
	.pipe(gulp.dest('dist/images'))
})

gulp.task('clean:dist', function(){
	return del.sync('dist');
})

// Clear Cache
gulp.task('cache:clear', function(callback){
	return cache.clearAll(callback);
})

gulp.task('build', function(callback){
	runSequence('clean:dist', ['sass','assets-build','images'], callback);
})

gulp.task('default', function(callback){
	runSequence(['sass','browser-sync','watch'], callback)
})