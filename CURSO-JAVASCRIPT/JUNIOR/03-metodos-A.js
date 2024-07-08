// METODOS DE CADENAS:

let cadena1 = "cadena de pruebas";
let cadena2 ="cadena 3";
let cadena3 ="abc";

// ACA ESTAMOS CONCATENANDO/AÑADIENDO UN STRING A LA CADENA1
resultado1 = cadena1.concat(" hola");
resultado2 = cadena1.concat(cadena2);
//ACA ESTAMOS RELLENANDO LA CADENA CON UNA DETERMINADA CANTIDAD DE CARACATERES
resultado3 = cadena3.padStart(10,"1");
//ACA ESTAMOS RELLENANDO AL FINAL
resultado4 = cadena3.padEnd(10,"1");

document.write(resultado1 + "<br>");
document.write(resultado2 + "<br>");
document.write(resultado3 + "<br>");
document.write(resultado4 + "<br>");

let cadena5 ="Vamos, a, secuenciar";

//ESTAMOS CONVIRTIENDO LA CADENA STRING DE CADENA5 EN UN ARRAY
resultado5= cadena5.split(",");
//ACA ESTAMOS CONVIRTIENDO TODO A MAYUSCULA
resultado5= cadena5.toLocaleUpperCase();
//ACA ESTAMOS CONVIRTIENDO TODO A MINUSCULA
resultado6= cadena5.toLocaleLowerCase();
//ACA ESTAMOS VIENDO LO QUE HAY EN LA POSICION 1
document.write(resultado5[1] + "<br>");
document.write(resultado5 + "<br>");
document.write(resultado6 + "<br>");

//METODOS ARRAYS

let nombres = ["uriel", "guillermo", "daniel"];

//ELIMINA EL ULTIMO ELEMENTO DE UN ARRAY Y NOS LO MUESTRA
//let resultado7 = nombres.pop();

//AGREGA ELEMENTOS A UN ARRAY AL FINAL DE LA LISTA 
//Y NOS MUESTRA LA CANTIDAD DE ELEMENTOS TOTALES QUE CONTIENE EL ARRAY
let resultado8 = nombres.push("santarelli");

//INVIERTE EL ORDEN DE LOS ELEMENTOS
let resultado9 = nombres.reverse(); 

document.write(resultado8 + "<br>");
document.write(resultado9 + "<br>");