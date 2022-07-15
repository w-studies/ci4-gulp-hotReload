import gulp from 'gulp'
import bs from 'browser-sync'

import gulpSass from 'gulp-sass'
import dartSass from 'sass'

import path from 'path'
import sourcemaps from 'gulp-sourcemaps'
import csso from 'gulp-csso'
const sass = gulpSass(dartSass)
import rename from 'gulp-rename'

const browserSync = bs.create()
const reload = browserSync.reload

// LOCAL URL
var local_url = 'localhost:8080'

// ASSETS FOLDER
var _assetsFolder = './public/assets/'
var _cssFolder = _assetsFolder + 'css/'

// browsersync start function
function startBrowserSync() {
  browserSync.init({
    proxy: local_url,
    baseDir: './public/',
    open: true,
    notify: false,
    browser: 'chrome'
  })
}

/**
 * SASS
 * @returns {*}
 */
const gulpSASS = (sources, destiny) => {
  // define onde os maps serão salvos
  let mapsDir = destiny ? '../../maps/' : '../maps/'

  return (
    gulp
      .src(sources)
      // inicia a criação do mapa
      .pipe(sourcemaps.init({ loadMaps: true }))
      // executa o sass compiler
      .pipe(sass().on('error', sass.logError))

      // renomeia
      .pipe(
        rename(function (file) {
          file.dirname = ''
          file.basename = path.parse(sources).name // sources.split('\\').pop();
          file.extname = '.css'
        })
      )

      // salva o mapa
      .pipe(sourcemaps.write(mapsDir))

      // salva o arquivo css
      .pipe(
        gulp.dest(_cssFolder + destiny, {
          overwrite: true
        })
      )

      // dispara o browserSync
      .pipe(browserSync.stream())
  )
}

// watch all
function watchAll() {
  //run once

  // watch .scss files
  const layoutCSS = gulp.watch(['./sources/scss/**/*.scss', './sources/scss/style.scss'])

  // layoutCSS STYLE
  layoutCSS.on('change', function (path) {
    console.log(`File ${path} was changed`)
    gulpSASS('./sources/scss/style.scss', '')
  })

  // watch .php files
  gulp.watch(['./ci421/app/**/*.php']).on('change', browserSync.reload)
}

// gulp default
gulp.task('default', gulp.parallel([startBrowserSync, watchAll]))
