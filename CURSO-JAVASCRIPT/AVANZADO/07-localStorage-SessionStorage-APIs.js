/*
Tanto localStorage como sessionStorage son propiedades que acceden al objeto Storage y 
tienen la función de almacenar datos de manera local en el navegador, 
sin necesidad de realizar conexiones a bases de datos externas:

localStorage:
Almacena datos de forma indefinida o hasta que se decida limpiar los datos del navegador.
Los datos guardados en localStorage persisten incluso después de cerrar el navegador y reiniciar la computadora.
Es útil para almacenar información que debe estar disponible en futuras visitas del usuario al sitio web.
Por ejemplo, puedes usarlo para guardar preferencias del usuario, como el tema oscuro o el idioma seleccionado.

sessionStorage:
Almacena datos mientras la pestaña o ventana del navegador esté abierta.
Una vez que se cierra la pestaña o ventana, la información almacenada en sessionStorage se elimina automáticamente.
Es útil para mantener datos temporales durante una sesión de navegación.
Por ejemplo, puedes usarlo para almacenar datos temporales mientras el usuario completa un formulario 
o navega por diferentes páginas del sitio.
*/

"use strict";

//SE VA A GUARDAR EN 'INSPECCCIONAR' EN LA OPCION 'APLICACION' ALMACENAMIENTO LOCAL
//DEFINIMOS LAS VARIABLES
localStorage.setItem("Nombre", "Uriel");

console.log(localStorage)

console.log(localStorage.getItem("Volumen"))

//CON 'CLEAR' ESTAMOS DEFINIENDO QUE SE BORRE TODO EL CONTENIDO ALMACENADO
//DESPUES DE 2000 MILISEGUNDOS (2 SEGUNDOS) 
setTimeout(()=>{
    let nombre = localStorage.clear();
},2000)

sessionStorage.setItem("Nombre", "Uriel");

console.log(sessionStorage)

console.log(sessionStorage.getItem("Volumen"))