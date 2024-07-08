//OPERADOR TERNARIO: 
/*
A diferencia de la estructura if-else tradicional, que utiliza palabras clave como "if", "else" y "else if", 
el operador ternario se representa con los símbolos "?" y ":" para representar las ramas verdaderas y falsas de una condición
Consume menos recursos que 'if/else' pero su uso no es frecuente
*/

let edad=25;
(edad > 18) 
        ? 
        (
        console.log("Es mayor de edad"),
        console.log("Por lo tanto no puede pasar")
        )
        :
        (
        console.log("Es menor de edad"),
        console.log("Por lo tanto SI puede pasar") 
        )