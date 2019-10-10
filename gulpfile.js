const gulp = require('gulp');
const babel = require('gulp-babel');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imageMin = require('gulp-imagemin');
const merge = require('gulp-merge');

const myFiles = [
    './app/js/scope.js',
    './app/js/container.js',
    './app/js/caller.js',
]

gulp.task('imgMin', function () {
    return gulp.src('./app/img/*')
        .pipe(imageMin({ optimizationLevel: 5 }))
        .pipe(gulp.dest('./dist/img'))
})

gulp.task('sass', function () {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass())
        .pipe(cssnano({
            zindex: false,
            discardUnused: false
        }))
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('js', function () {
    return gulp.src(myFiles)
        .pipe(babel({
            presets: ['@babel/env'],
            plugins: ["@babel/plugin-proposal-class-properties"],
        }))
        .pipe(concat('all.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
})

gulp.task('go', function () {
    gulp.watch('./app/scss/*.scss', gulp.series('sass')),
        gulp.watch('./app/js/*.js', gulp.series('js')),
        gulp.watch('./app/img/*', gulp.series('imgMin'));
    return
});