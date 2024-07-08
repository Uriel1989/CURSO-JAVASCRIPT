/*
La API de Observador de Intersección en JavaScript proporciona una forma eficiente de observar de manera asíncrona 
los cambios en la intersección de un elemento objetivo con un elemento ancestro o con el viewport del documento de nivel superior
Cómo funciona Intersection Observer:
Permite registrar una función de devolución de llamada que se ejecuta cuando un elemento objetivo entra o sale de otro elemento 
(o del viewport) o cuando la cantidad de intersección entre ambos elementos cambia en una cantidad requerida.
No es necesario que los sitios realicen cálculos en el hilo principal para observar estas intersecciones.
El navegador optimiza la gestión de intersecciones.
Eventos clave de Intersection Observer:
dragstart: Se activa cuando el usuario comienza a arrastrar un elemento.
dragend: Se activa cuando la operación de arrastre finaliza (por ejemplo, al soltar el botón del mouse o presionar la tecla Esc).
dragenter: Se activa cuando un elemento arrastrado entra en un destino válido.
dragleave: Se activa cuando un elemento arrastrado sale de un destino válido.
dragover: Se activa mientras un elemento arrastrado se encuentra sobre un destino válido.
drop: Se activa cuando un elemento se suelta en un destino válido
*/

/*
este código utiliza Intersection Observer para detectar cuándo los elementos con la clase ".caja" 
se vuelven visibles en la ventana del navegador y muestra un mensaje en la consola cuando esto sucede. 
Es útil para implementar funcionalidades como carga diferida de contenido o seguimiento de visualizaciones de anuncios.
*/


"use strict";

const cajas=document.querySelectorAll(".caja");

const verifyVisibility=(entries)=>{
    for(const entry of entries){
        if (entry.isIntersecting) console.log("Se esta viendo el contenedor: ",entry.target.textContent)
    }
}

const observer = new IntersectionObserver(verifyVisibility);

for(const caja of cajas){
    observer.observe(caja);
}