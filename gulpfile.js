var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', () => {
	// Follow Javascript Code Style Guide of Airbnb https://github.com/airbnb/javascript
	return gulp.src('src/**/*.js')
		.pipe(eslint())
		.pipe(eslint.format())
});

gulp.task('default', ['lint']);