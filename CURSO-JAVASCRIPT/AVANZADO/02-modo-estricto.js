
//MODO ESTRICTO: SE BUSCA ELIMINAR ERRORES EN EXCEPCIONES
//EVITA LA MALA SINTAXIS
//MEJORA LA OPTIMIZACION



"use strict";

//DEBE SER LA PRIMERA SENTENCIA DEL BLOQUE DE CODIGO PARA ACTIVARLO
//AL COLOCAR ESTA SENTENCIA PASAMOS A ESTAR OBLIGADOS
//DECLARAR ESTRICTAMENTE LAS VARIABLES Y OTRAS SINTAXIS SIN OBVIAR NADA

var nombre02 = "uriel";

console.log(nombre02)

const obj ={nombre: "Uriel"};

//CON ESTO ESTAMO EVITANDO QUE SE AGREGUEN NUEVAS PROPIEDADES A OBJ
Object.preventExtensions(obj);

//ESTA LINEA DE CODIGO NO SE VA A EJECUTAR, SOBRA, NO CORRESPONDE
//obj.apellido="Santarelli"

console.log(obj)

//SIN EL "use strict"; NO NOS VA A SEÑALAR NINGUN ERROR
//PERO AL TENERLO ACTIVADO NO VA A APARECER UNA ADVERTENCIA


//SINO ESTUVIERA EL ACTIVADO "use strict";
//NO NOS ADVERTIRIA QUE HAY 2 PARAMETROS CON LA MISMA DENOMINACION
// function palabra (texto, texto){
//     console.log(texto)
// }
function palabra (texto, text){
    console.log(texto, text)
}

palabra("LoQueSea","NoSeNada")