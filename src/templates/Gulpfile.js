var gulp = require('gulp');
var sass = require('gulp-sass');

var input = './sass/**/*.scss';
var output = './css/';

var sassOptions = {
   errLogToConsole: true,
   outputStyle: 'expanded'
};

// compile sass
gulp.task('sass-compile', function() {
    return gulp
        .src(input)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(gulp.dest(output));
});

// watch files
gulp.task('watch', function() {
    return gulp
        .watch(input, ['sass-compile'])
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});

// set 'sass-compile' and 'watch' as default tasks:
gulp.task('default', ['sass-compile', 'watch']);
