const gulp = require('gulp'),
    pug = require('gulp-pug'),
    connect = require('gulp-connect'),
    { series } = require('gulp'),
    uglify = require('gulp-uglify'),
    sm = require('gulp-sourcemaps');


function fireUp(){
    connect.server({
        root: '.',
        livereload : true
    })
}
gulp.task('js',function(){
    return gulp.src('project/js/*.js')
    .pipe(sm.init())
    .pipe(uglify())
    .pipe(sm.write('.'))
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
})
//compile and minify pugjs and move the html files to dist
gulp.task("html",function(){
    return gulp.src("project/pug/*.pug")
    .pipe(pug())
    .pipe(gulp.dest("."))
    .pipe(connect.reload());
})
gulp.task('watch',function (){
    fireUp()
    gulp.watch('project/pug/**/*.pug',gulp.series('html'))
    gulp.watch('project/js/*.js',gulp.series('js'))
})
gulp.task('default',gulp.series('watch'))