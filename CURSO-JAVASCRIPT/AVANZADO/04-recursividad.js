// RECURSIVIDAD: CUANDO UNA FUNCION SE LLAMA ASI MISMA
/*La recursividad es una técnica de programación en la que una función se llama a sí misma para resolver un problema12. 
En JavaScript, las funciones recursivas pueden ser utilizadas para resolver problemas complejos de una manera sencilla 
y fácil de entender
*/
//La primera línea del código es "strict mode";. 
//Esto activa el modo estricto en JavaScript, lo que ayuda a detectar errores y malas prácticas en el código.
"strict mode";

// La función validarEdad se define con un parámetro opcional msg.
const validarEdad=(msg)=>{
// Se inicializa una variable llamada edad.
    let edad;
    try{
// Si se proporciona un mensaje (msg), se muestra un cuadro de diálogo para que el usuario ingrese su edad y se asigna a la variable edad.
        if(msg) edad=prompt(msg);
        else edad= prompt("Introduce tu edad");
// La entrada del usuario se convierte a un número entero utilizando parseInt.
        edad = parseInt(edad);
// Si la entrada no es un número válido (es decir, isNaN(edad) es verdadero), se lanza un error con el mensaje “Introduce un numero para la edad”.
        if(isNaN(edad))throw "Introduce un numero para la edad";
// Si la edad es mayor que 18, se muestra “Sos mayor de edad” (Eres mayor de edad). De lo contrario, se muestra “Sos menor de edad” (Eres menor de edad).
        if(edad >18) console.log("Sos mayorde edad");
        else console.log("Sos menor de edad");
// Si ocurre un error (por ejemplo, entrada inválida), se llama recursivamente a la función con el mensaje de error.
    } catch(e){
        validarEdad(e)
    }
}

validarEdad()
