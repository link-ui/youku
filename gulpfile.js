var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('copy-scss', function(){
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task("watchall",function(){
    gulp.watch('scss/*.scss',gulp.series("copy-scss"));
});