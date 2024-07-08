//LAS SENTENCIAS DE FLUJO HACEN REFERENCIA A LOS CONDICIONALES
//TALES COMO IF, IF-ELSE, SWITCH


//SE DEBE COLOCAR UN BREAK PARA EVITAR QUE EL CODIGO
//SE SIGA EJECUTANDO MAS ALLA DE LO DESEADO 
//let exp="UVAS"; 
//switch(exp){
//     case "manzana": console.log("Esta fruta es verde");
//     break;
//     case "mandarina": console.log("Esta fruta de color naranja");
//     break;
//     case "pera": console.log("Esta fruta es de color amarillo");
//     break;

//     //EL DEFAULT ES POR SI NO SE CUMPLE NINGUNO DE LOS 'CASE' ANTERIORES
//     default:
//         alert("Ninguna de las anteriores")
// }

//LA SENTENCIA IF ES MAS EFICIENTE
//RESPECTO A CONSUMO DE RECURSOS
//PERO EL SWITCH ES MEJOR PARA ANALISIS DE CODIGOS DEMASIADO COMPLEJOS


//EL TRY-CATCH NOS PERMITE CONTROLAR LOS ERRORES 
//EN CASO DE MAL FUNCIONAMIENTO
//ESTO ESTA PENSADO PARA ERRORES DE LOGICA, NO PARA ERRORES DE SINTAXIS
try{
    gfaeg
}

catch (error){
    console.log("Mensaje de ERROR al ejecutar");
} 
//EL FINALLY SE EJECUTA A MODO DE CIERRE AL TENER PRIORIDAD MAXIMA
finally{
    console.log("Este mensaje se muestra sin importar NADA")
}