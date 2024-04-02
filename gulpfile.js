const {src, dest, watch, series} = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const purgecss = require("gulp-purgecss")

//function used for compiling SASS
function buildStyles(){
    return src("mini-lab/**/*.scss")
        .pipe(sass())
        .pipe(purgecss({content: ["*.html"]}))
        .pipe(dest("css"))
}

//function used for watching SASS files for changes and recompiling
function watchTask() {
    watch(["mini-lab/**/*.scss", "*.html"], buildStyles)
}

exports.default = series(buildStyles, watchTask)