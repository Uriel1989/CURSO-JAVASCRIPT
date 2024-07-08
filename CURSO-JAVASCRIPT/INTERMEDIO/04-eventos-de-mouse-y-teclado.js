//PODEMOS ALTENERAR EL COMPORTAMIENTO AL MOMENTO DE CLIQUEAR:

const contenedor01 = document.querySelector(".contenedor-1");


contenedor01.addEventListener("click",(e)=>{
    alert("Haz dado click en el boton");
});


//PODEMOS ALTENERAR EL COMPORTAMIENTO AL MOMENTO DE TECLEAR:

const input = document.querySelector(".input-prueba");

//ESTO ES CUANDO LA TECLA SE PRESIONA
input.addEventListener("keydown",(e)=>{
    console.log("Una tecla fue presionada");
});

//ESTO ES CUANDO LA TECLA SE PRESIONA Y SE SUELTA EN EL MISMO ELEMENTO 
input.addEventListener("keypress",(e)=>{
    console.log("un usuario presiono una tecla y la solto");
});

//ESTO ES CUANDO LA TECLA SE SUELTA EN EL MISMO ELEMENTO
input.addEventListener("keyup",(e)=>{
    console.log("una tecla fue soltada");
});

//PODEMOS VER TODO ESTO EN LA SECCION 'CONSOLA' AL HACER CLIK DERECHO EN EL NAVEGADOR
//Y SELECCIONAR 'INSPECCIONAR'

