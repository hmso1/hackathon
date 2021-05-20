const {src, dest, series} = require('gulp');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');

const babel = require('gulp-babel')
const uglify = require("gulp-uglify");

const sass = require('gulp-sass');
sass.compiler = require('node-sass')
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano')

function compileHTML() {
  return src('src/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(dest('.'));
}

function compileJS() {
  return src("src/js/*.js")
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest("js"));
}

function compileSlickJS() {
  return src("src/js/slick/*.js")
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest("js/slick"));
}

function compilePrefixerSCSS() {
  return src("src/css/*.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([autoprefixer(), cssnano()]))
  .pipe(dest("css"));
}

function compilePrefixerCSS() {
  return src("src/css/*.css")
  .pipe(postcss([autoprefixer(), cssnano()]))
  .pipe(dest("css"));
}

function compilePrefixerSlickCSS() {
  return src("src/js/slick/*.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([autoprefixer(), cssnano()]))
  .pipe(dest("js/slick"));
}



exports.default = series(compilePrefixerCSS, compilePrefixerSCSS, compilePrefixerSlickCSS)