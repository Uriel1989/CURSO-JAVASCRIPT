//JSON SON COMO LOS ARRAY ASOCIATIVOS (QUE SON OBJETOS)


//OBJETO

// objeto01={
//     variable01:"Uriel",
//     variable02:"Guillermo"
// };

// console.log(objeto01)


//JASON SE DEFINE CON COMILLLAS
// objeto02={
//     "variable01":"Uriel",
//     "variable02":"Guillermo"
// };

// console.log(objeto02.variable01)
// console.log(objeto02.variable02)

// CUANDO SE DICE QUE ESTA 'SERIALIZADO' SE REFIER A QUE ES UNA CADEA DE TEXTO
//ES NECESARIO SERIALIZAR PORQUE UN NAVEGADOR/PAGINA PUEDE TENER DIFICULTADES PARA 
//INTERPRETAR CIERTOS CARACTERES

//DE ESTA FORMA SE SERIALIZA PARA QUE LO PUEDA PROCESAR EL SERVIDOR AL CUAL ENVIAMOS LA INFORMACION
const deserializado01 = {"variable01": "Uriel","variable02":"Guillermo"};

//CONVIERTE EN FORMATO STRING
const serializado01 =JSON.stringify(deserializado01)
console.log(typeof serializado01)


//DE ESTA FORMA SE DESERIALIZA PARA QUE VUELVA A SER OBJETO
const serializado02 = '{"variable01": "Uriel","variable02":"Guillermo"}';

//CONVIERTE EN FORMATO JSON
const deserializado02 =JSON.parse(serializado02)
console.log(typeof deserializado02.variable01)