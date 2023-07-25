document.addEventListener('DOMContentLoaded', function(){ creargaleria();});

function creargaleria(){
 const galeria = document.querySelector('.galeria-imagenes');  //selecciona el elemento UL del html con la clase galeria-magenes
 
 for(let i=1; i<=12; i++){
  const imagen = document.createElement('IMG');  // me crea un elemento tipo imagen <img>
   // imagen.src = "./build/img/thumb/"+i+".jpg";
      imagen.src = `./build/img/thumb/${i}.jpg`; //elemento cargado con la imagen
   //   console.log(imagen);  
   const lista = document.createElement('LI'); //genera un elemetno <li> por cada iteracion en la variable lista
   lista.appendChild(imagen);  //cada imagen que se genere y se carga al elemento <imagen>, se agrega al elemento lista "LI"
   galeria.appendChild(lista);  //galeria tiene cargado el elemento UL del html

   imagen.onclick = mostrarimagen; //a cada elemento <imagen> creado, le añade el aributo "evento onclick" y le asigna funcion
   imagen.dataset.imagenId = i;  //agreda atributo con dataset llamadoiamgen-Id, en html5
                         }                     
                        }

 
 function mostrarimagen(evento){
   const id = parseInt(evento.target.dataset.imagenId);//  convierte el strint a numero
  // console.log(id); // me muestra el atributo dataset.imagenid
   //genera la imagen mas grande
  const imagen = document.createElement('IMG');
  imagen.src = "./build/img/grande/"+id+".jpg";
  const div = document.createElement('DIV');
  div.appendChild(imagen); //en el div creado se le anexa la imagen
  div.classList.add("imagengrande");  // al div se le agrega class
  ///crear elemento cerrar imagen
  const cerrarimagen = document.createElement('P');
  cerrarimagen.textContent = 'x';
  cerrarimagen.classList.add("btn-cerrar");
  div.appendChild(cerrarimagen);  // al div creado se le agrega el elemento P, ya tenia el elemento IMG
  //cuando se presiona el boton 'X' de cerrrar imagen
  cerrarimagen.onclick = function() { div.remove();  }
   div.onclick = function() {  div.remove(); }                                 
 

  const body = document.querySelector('body'); //seleciona el body del html
  body.appendChild(div);   // al body se le anexa el div con la imgagen 
  body.classList.add('fijar-body'); //clase creada para anclar la imagen y no se de scroll
                        }    