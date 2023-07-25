
const {src, dest, watch, series} = require('gulp');//Cargamos nuestro modulo gulp y extraemos las funciones src y dest
const sass = require('gulp-sass')(require('sass')); //Cargamos el modulo gulp sass y compilar sass
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
//const webp = require('gulp-webp');
const concat = require('gulp-concat'); //me une los archivos o codigo de diferentes archivos .js y los compila en uno solo "bundle.js"
//utiliades CSS
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
//utilidades JS
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');

//sass({outputStyle: 'compressed'})
function compilarSASS() {
return src("./src/scss/app.scss").pipe(sourcemaps.init()).pipe(sass()).pipe(postcss([autoprefixer(), cssnano()])).pipe(sourcemaps.write('.')).pipe(dest("./build/css"));
//done(); finaliza tarea                               //outputStyle: 'compressed = comprime el css  // postcss autofixer, cssnano = mejoras
                        }
               
function imagenes(){
  return src("./src/img/**/*").pipe(imagemin()).pipe(dest("./build/img")) // * = carpeta actual, ** = todas las carpetas dentro de img
                               .pipe(notify({message: 'imagen notificada'})); 
                    }

//function versionwebp(){
//  return src("src/img/**/*").pipe(webp()).pipe(dest("./build/img")); //.pipe(notify({message: 'version webp lista'}));
//                      }

function watcharchivos(){ watch("./src/scss/**/*.scss", compilarSASS); //funcion que escucha por cambios de todos los archivos .scss
                          watch("./src/js/**/*.js", javascript);}  //y luego ejecuta la funcion compilarSASS para se midifique el css 
                                                                 

function javascript() {
  return src("src/js/**/*.js").pipe(concat('bundle.js')).pipe(terser()).pipe(rename({suffix: '.min'})).pipe(dest('./build/js'));
                      }       //terser es para minificar codigo js con gulp-terser-js / con rename se renombra y se debe enlazar en el index                                             
                                                                 
exports.compilarSASS = compilarSASS;   //hace disponible la tarea de forma externa o mandar a llamar
exports.imagenes = imagenes;           //la tarea o funcion
//exports.versionwebp = versionwebp;
exports.watcharchivos = watcharchivos;                                      
exports.javascript = javascript;

exports.default = series(compilarSASS, imagenes, watcharchivos); // ejecuta las tareas en serie segun el orden
//exports.default = parallel(); ejecuta las tareas en paralelo al mismo tiempo
