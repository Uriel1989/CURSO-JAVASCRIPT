//ATRIBUTOS DE INPUTS

const input =document.querySelector(".input-normal");

//ASI ESTAMOS ACCEDIENDO A LOS ATRIBUTOS DIRECTAMENTE
document.write(input.className);

//MUESTRA EL VALOR INTERNO
document.write(input.value);

//DE ESTA FORMA PODEMOS ESTABLECER EL NUMERO MINIMO DE CARACATERES
input.minLength="4";
