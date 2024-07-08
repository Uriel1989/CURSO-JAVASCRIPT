//LOS CALLBACKS CONSISTEN EN FUNCIONES DENTRO DE OTRAS FUNCIONES

// function prueba (CALLBACKS){
//     CALLBACKS("Uriel");
// }

// function presentacion (nombre){
//     console.log(nombre)
// }

// prueba(presentacion)

//PROMESAS: SE TRATA DE OBJETOS
//REPRESENTAN LA TERMINACION O EL FRACASO DE UNA OPERACION ASINCRONA
//una promesa es un objeto devuelto al cual se adjuntan funciones callback, 
//en lugar de pasar callbacks a una función.

let nombre = "Uriel";

const promesa = new Promise ((resolve, reject)=>{
    if (nombre !=="Uriel")reject("Error, nombre equivocado");
    else resolve(nombre)
})


//THEN ES UN METODO QUE TIENEN LAS PROMESAS QUE NOS PERMITE ACCEDER A SU CONTENIDO
promesa.then((resultado)=>{
    console.log(resultado)
}).catch((e)=>{
    console.log(e)
})