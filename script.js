import { barcelona, roma, paris, londres } from './ciudades.js'

//obtener los elementos del DOM
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

//agregar un evento CLICK a cada enlace
enlaces.forEach (function (enlace) {
    enlace.addEventListener('click', function(){
          //remover el activo
        enlaces.forEach(function (enlace) {
            enlace.classList.remove ('active');
        });
        //agregar clase 'active' al enlace actual
        this.classList.add('active');
        //agregar el active al que corresponda
    
    //traer la informacion del objeto correspondiente a la eleccion
        let contenido = obtenerContenido(this.textContent)

    // mostrar el contenido en el DOM 

        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    });   
});


//funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido (enlace) {
    let contenido = {
        'Barcelona' : barcelona, 
        'Roma' : roma, 
        'París' : paris, 
        'Londres' : londres 
    };
    return contenido[enlace];
}

