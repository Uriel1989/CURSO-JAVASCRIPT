//DOM document object modem
/*Es una interfaz de programación para los documentos HTML y XML. 
Facilita una representación estructurada del documento 
y define de qué manera los programas pueden acceder, 
al fin de modificar, tanto su estructura, estilo y contenido.
*/
const rangoEtario = document.querySelector(".rangoEtario");
//DE ESTA FORMA MODIFICAMOS UN ATRIBUTO
rangoEtario.setAttribute("type","text");

valorDelAtributo =rangoEtario.getAttribute("type");

//ASI OBTENEMOS EL TIPO DE ATRIBUTO 
document.write(valorDelAtributo)

const titulo = document.querySelector(".titulo");
//AL COLOCAR "TRUE" PODEMOS MODIFICAR LA CLASS "TITULO" DEL HTML
titulo.setAttribute("contentEditable","true")