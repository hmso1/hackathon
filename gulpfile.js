const {src, dest} = require('gulp');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const minify = require("gulp-babel-minify");



function compileHTML() {
  return src('src/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(dest('.'));
}

function compileJS() {
  return src("src/js/typed.js")
    .pipe(minify({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(dest("js"));
}




exports.default = compileJS