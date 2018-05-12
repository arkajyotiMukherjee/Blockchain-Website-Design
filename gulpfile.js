const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
const runSequence = require('run-sequence');
const strip = require('gulp-strip-comments');


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

gulp.task('comments', function () {
	return gulp.src('app/**/*.+(js|html)')
		.pipe(strip())
		.pipe(gulp.dest('dist'));
});

  

gulp.task('clean:dist', function(){
	return del.sync('dist');
})

// Clear Cache
gulp.task('cache:clear', function(callback){
	return cache.clearAll(callback);
})

gulp.task('build', function(callback){
	runSequence('clean:dist',['sass','assets-build','images'],'comments', callback);
})

gulp.task('default', function(callback){
	runSequence(['sass','browser-sync','watch'], callback)
})