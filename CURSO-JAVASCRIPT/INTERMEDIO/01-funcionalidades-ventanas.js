//OPEN, CLOSE, CLOSED, STOP

let youtube = "https://www.youtube.com/watch?v=2hCYfrnkXnA&t=439s"

// CON ESTO PODEMOS ABRIR UNA VENTANA, EN ESTE CASO A YOUTUBE
// window.open(youtube)

// window.alert("Cartel Emergente")

// //NOS PERMITE ABRIR UNA VENTANA DE IMPRESION
// print()

// //CARTEL EMERGENTE PARA INGRESAR DATOS
// prompt("Ingrese un dato")

const screen=window.screen;

//SE TRATA DE UN OBJETO, CON DISTINTAS PROPIEDADES
//PODEMOS ACCEDER A ELLAS PONIENDO UN "." Y VIENDO LAS OPCIONES
console.log(screen);
document.write(screen.availWidth + "<br>");


//CON ESTO ESTAMOS MIDIENDO LA DISTANCIA 
//ENTRE LA VENTANA Y EL LIMITE DE LA PANTALLA 
const screenLeft = window.screenLeft;
const screenTop = window.screenTop;

document.write( `Left: ${screenLeft}</b><br>
                 Top: ${screenTop}</b><br>`
);
////ESTO NOS PERMITE DETERMINAR CUANTOS PIXELES NOS HEMOS DESPLAZADO
////RESPECTO A LOS EJES X - Y
// const scrollX = window.scrollX;
// const scrollY = window.scrollY;

// alert(screenX + " " + screenY);


//MUESTRA LA UBICACION DEL ARCHIVO SOBRE EL CUAL ESTAS TRABAJANDO
const href = window.location.href;

document.write(href);