console.log("listo...");
document.addEventListener('DOMContentLoaded', function() {scrolnav(); navfija();});

function scrolnav() {
const enlaces = document.querySelectorAll('.navegacion-principal a');  //selecicona el elemento nav y sus enelaces 

enlaces.forEach( function(enlace){  //me recorre los enlaces del elemento NAV seleccionado 
    enlace.addEventListener('click', function(e){ // a cada elmento iterado, le asocia el evento click
      e.preventDefault();
      console.log(e.target.attributes.href.value);  //accede al valor del href = #lineup, #galeria, #bolotos
      const seccion = document.querySelector(e.target.attributes.href.value); //selecciona el elemento con el id #lineup...galer..
      seccion.scrollIntoView({behavior: 'smooth'});  //salta al elemento seleccionado, a la fucion scrollIntoView se le pasa un objeto
                                                }); 
                                 });
                    }



 const barra = document.querySelector('header');

     //con intersectionobserver se observa el elemento a observar               
function navfija() {
 const observer = new IntersectionObserver(function(entries){  //IntersectionObserver = api de js, entries da la informacion del elemento a observar
    if(entries[0].isIntersecting){   // entries[0] = elemento 0 o primer elemento, ya que sepuede observar multiples elementos
       barra.classList.remove('fijo');
                                 }   
    else { barra.classList.add('fijo'); }                                      
                                                            }
                                          );

    observer.observe(document.querySelector('.sobre-festival'));  // con el metodo observe toma un elemento a observar                                     
                   }                   