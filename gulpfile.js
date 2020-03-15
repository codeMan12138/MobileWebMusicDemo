var {src,dest,series,parallel,watch} = require('gulp')
var htmlclean = require('gulp-htmlclean');
var mode = require('./config')
var imgMin = require('gulp-imagemin')
var strip = require('gulp-strip-debug')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var less = require('gulp-less')
var postcss = require('gulp-postcss')
var cssnano = require('cssnano')
var autoprefixer = require('autoprefixer')
var connect = require('gulp-connect')


var folder = {
    src:'src/',
    dist:'dist/'
}
console.log(mode.devMode);

process.env.NODE_ENV = mode.devMode

var isDevMode = process.env.NODE_ENV == 'development'
console.log(isDevMode);

function html(){
    var page = src(folder.src + 'html/*')
    if(isDevMode){
        return page
            .pipe(htmlclean())
            .pipe(dest(folder.dist + 'html/'))
    }
    return page.pipe(dest(folder.dist + 'html/'))
}

function images(){
    return src(folder.src + 'images/*')
        .pipe(imgMin())
        .pipe(dest(folder.dist + 'images/'))
}

function js(){
    var page = src(folder.src + 'js/*')
    if(isDevMode){
        return page.pipe(strip()).pipe(uglify()).pipe(dest(folder.dist + 'js/'))
    }
    return page.pipe(dest(folder.dist + 'js/'))
}

function css(){
    var options = [autoprefixer(),cssnano()]
    var page = src(folder.src + 'css/*')
    if(isDevMode){
        console.log('js');
        
        page.pipe(less()).pipe(postcss(options)).pipe(dest(folder.dist + 'css/'))
    }
    return page.pipe(dest(folder.dist + 'css/'))
}

function connectTask(){
    connect.server({
        root:'dist',
        livereload:true
    })
}

function watchTask(){
    watch(folder.src + 'js/*',js)
    watch(folder.src + 'html/*',html)
    watch(folder.src + 'images/*',images)
    watch(folder.src + 'css/*',css)
}

exports.default = parallel(html,css,js,images,connectTask,watchTask)