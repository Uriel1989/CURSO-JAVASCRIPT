/*
Este fragmento de código es una aplicación de reloj en JavaScript que muestra la hora actual en una página web. 
Permíteme explicarte lo que hace:

use strict:
Esta declaración activa el modo estricto en JavaScript. 
En este modo, se aplican reglas más estrictas para escribir código, lo que ayuda a evitar errores comunes.
*/

"use strict";
/*
addZeros:
Esta función toma un número n como argumento.
Si la longitud de la representación en cadena de n es menor que 2 (es decir, es un solo dígito), 
agrega un cero al principio y devuelve la cadena resultante.
Por ejemplo, si n es 5, la función devuelve “05”.
*/
const addZeros = n =>{
    if (n.toString().length < 2) return"0".concat(n);
    return n;
}
/*
actualizarHora:
Esta función se ejecuta para actualizar la hora en la página.
Crea una instancia de Date para obtener la hora actual.
Luego, formatea las horas, minutos y segundos utilizando la función addZeros.
*/
const actualizarHora =()=>{
    const time =new Date();
    let hora = addZeros(time.getHours());
    let min = addZeros(time.getMinutes());
    let seg = addZeros(time.getSeconds());
    document.querySelector(".hora").textContent=hora;
    document.querySelector(".min").textContent=min;
    document.querySelector(".seg").textContent=seg;
}

/*
Actualiza los elementos HTML con las clases .hora, .min y .seg con los valores correspondientes.
setInterval(actualizarHora, 1000):
Establece un intervalo de tiempo para llamar a la función actualizarHora cada 1000 milisegundos (es decir, cada segundo).
Esto asegura que el reloj se actualice continuamente.
*/

actualizarHora()
setInterval(actualizarHora,1000)