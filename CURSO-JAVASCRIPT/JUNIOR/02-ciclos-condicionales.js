//ARRAYS o ARREGLO traicional
frutas = ["manzanas ", " mandarinas ", " bananas ", " uvas"]

//document.write(frutas[1])

//ARRRAY ASOCIATIVO
pc= {
    nombre:"Uriel-PC",
    procesador:"Ryzen 5",
    RAM: "16GB",
    espacio: "3TB"
};

//Con este tipo de ARRAYs podemos instaciarlos con el nombre de la variabl
//No se requiere el numero de la poscicion del valor

/*
document.write("El nombre de mi PC es: " + (pc["nombre"])+ "<br>");
document.write("El procesador de mi PC es: " + (pc["procesador"])+ "<br>");
document.write("El RAM de mi PC es: " + (pc["RAM"])+ "<br>");
document.write("El espacio de mi PC es: " + (pc["espacio"])+ "<br>");
*/

//BUCLES E INTERACCION


NumeroParaOperar = 0;
/*
if(NumeroParaOperar<10){
    document.write("Es menor que 10");
}
*/

/*
while(NumeroParaOperar<10){
    NumeroParaOperar++;
    document.write("El valor de la variable ahora es: "+ NumeroParaOperar + "<br>");
}
*/

/*
while(NumeroParaOperar<100){
    NumeroParaOperar++;
    document.write( NumeroParaOperar + "<br>");
    if(NumeroParaOperar == 10){
        //SE DETIENE ANTES DE LLEGAR A 1000 POR EL BREAK
        break;
    }
}
*/

//CICLO FOR
/*
for (let i= 0; i<6; i++){
    //SI LA VARIABLE ES IGUAL A 2, SE LA SALTEA
    if(i==2){
        continue
    }
    document.write(i + "<br>")
}
*/

/*

//FOR IN RECORRE LAS POSICIONES
let animales = ["perro", "gato", "caballo", "oveja"];

for (animal in animales){
    document.write(animal + "<br>")
}

//FOR OF MUESTRA EL CONTENIDO
for (animal of animales){
    document.write(animal + "<br>")
}

*/

/*
 
//FUNCIONES: un espacio de codigo que ejecuta una operacion
//ACA ESTAMOS DECLARANDO:
function saludar(){
    respuesta = prompt("Hola, como viene tu dia?")
    if(respuesta=="bien"){
        alert("Me alegro, ojala siga asi")
    } else{
        alert("Bueno, espero que vaya mejorando")
    }
}

//ACA LA ESTAMOS LLAMANDO:
saludar()
*/

/*
//TAMBIEN PODEMOS RETORNAR VALORES CON LAS FUNCIONES:
function bienvenida(){
    alert("Hola, capo, como estas?")
    return "Se ha ejecutado correctamente"
}

let saludo =bienvenida()

document.write(saludo)
*/

//PARAMETROS: los valores introducido en el parentesis son los PARAMETROS
//esto nos permite cargar los valores y ahorrar lineas de codigo y recursos

/*
function operaciones(n1,n2){
    let op = n1+n2;
    return op;
}
//LLAMAMOS A LA FUNCION Y LE CARGAMOS LOS VALORES CORRESPONDIENTES A LOS PARAMETROS
let declaracion=operaciones(12,34)

document.write("El resultado de la funcion es: " + declaracion)
*/