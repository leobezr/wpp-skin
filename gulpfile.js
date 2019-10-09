const gulp = require('gulp');
const babel = require('gulp-babel');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imageMin = require('gulp-imagemin');
const merge = require('gulp-merge');

const myFiles = [
    './app/js/document.js',
    './app/js/functions.js',
    './app/js/*.js',
]

gulp.task('imgMin', function () {
    return gulp.src('./app/img/*')
        .pipe(imageMin({ optimizationLevel: 5 }))
        .pipe(gulp.dest('./dist/img'))
})

gulp.task('sass', function () {
    return merge(
        gulp.src('./app/styles/*.scss')
            .pipe(sass())
            .pipe(cssnano({
                zindex: false,
                discardUnused: false
            })),
        gulp.src('./vendors/fontawesome/css/all.css')
            .pipe(sass())
            .pipe(cssnano({
                zindex: false,
                discardUnused: false,
            }))
    )
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('js', function () {
    return gulp.src(myFiles)
        .pipe(babel({
            presets: ['@babel/env'],
            plugins: ["@babel/plugin-proposal-class-properties"],
        }))
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
})

gulp.task('go', function () {
    gulp.watch('./app/styles/*.scss', gulp.series('sass')),
        gulp.watch('./app/js/**/*.js', gulp.series('js'));
    gulp.watch('./app/img/*', gulp.series('imgMin'));
    return
});