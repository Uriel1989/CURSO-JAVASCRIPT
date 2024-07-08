//EVENTOS 
//CONSISTE EN ACONTECIMIENTOS QUE OCURREN CUANDO INTERACTUAMOS
//CON UN ELEMENTO
//SE DEBEN ASOCIAR AL ELEMENTO EN CUESTION

// const button = document.querySelector(".button");


// El método addEventlistener, es un escuchador que indica al navegador que este atento a la interacción del usuario. 
// La ventaja es que se escribe totalmente en el JS, sin necesidad de tocar el HTML.

// button.addEventListener("click", ()=>{
//     alert("Hola");
// });


//PODEMOS ALTERAR EL ORDEN EN QUE SE EJECUTAN LOS EVENTOS
//MEDIANTE LA ESPECIFICIDAD, MIENTRAS MAS ESPECIFICA LA 
//INSTRUCCION, GANA EN JERARQUIA Y SE EJECUTA ANTES:

const contenedor = document.querySelector(".contenedor");

contenedor.addEventListener("click", (e)=>{
    alert("Haz dado click en el CONTENEDOR")
});

