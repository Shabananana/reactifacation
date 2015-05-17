var gulp = require("gulp");
var babel = require("gulp-babel");
var babelify = require('babelify');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('default', ['modules', 'minify'], function () {
  return gulp.src("./src/client/scripts/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('watch', function(){
    gulp.watch('*.js', ['default'])
});

gulp.task('modules', function() {
    return browserify({
        entries: './src/client/scripts/main.js',
        debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.browserify.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('minify', function() {
    return browserify({
        entries: './src/client/scripts/main.js'
    })
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.browserify.min.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});
