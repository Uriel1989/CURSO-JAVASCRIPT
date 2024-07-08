/*
API (o interfaz de programación de aplicaciones) 
es un conjunto de definiciones y protocolos que se utiliza para diseñar e integrar el software de las aplicaciones. 
¿Qué es una API?
Una API es como un contrato entre diferentes partes del software. 
Define cómo los programas pueden interactuar entre sí.
Permite que un programa solicite datos o funciones a otro y reciba una respuesta.
Simplifica el desarrollo de aplicaciones y ahorra tiempo y dinero 
al no requerir que los desarrolladores conozcan los detalles de implementación de otros sistemas.
Las API también facilitan la colaboración entre equipos comerciales y de TI 
al integrar elementos de aplicaciones nuevas en arquitecturas existentes.
*/
"use strict"

//AL COLOR EL 'NEW' NOS PERMITE PONER PROPIEDADES
const fecha = new Date();

console.log("Fecha de hoy: " + fecha)
console.log("Numero de dia del mes: " + fecha.getDate())
//EMPIEZA A CONTAR DESDE CERO Y DESDE EL DOMINGO
console.log("Numero de dia de la semana: " + fecha.getDay())
//EMPIEZA A CONTAR DESDE CERO
console.log("Numero del mes del año: " + fecha.getMonth())

console.log("Hora del dia: " + fecha.getHours())
console.log("Minutos del dia: " + fecha.getMinutes())
console.log("Segundos del dia: " + fecha.getSeconds())
console.log("Hora actual: " + fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds())
