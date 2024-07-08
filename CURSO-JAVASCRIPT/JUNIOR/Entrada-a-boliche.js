//PROGRAMA DE ENTRADA A BOLICHES:

let free = false;

const validarCliente =(time)=>{
    let edad= prompt("Cual es tu edad?");
    if (edad > 18) {
        //SE ESTABLECE UN RANGO HORARIO PARA EL BOLICHE
        if (time >= 2 &&time < 7 && free == false ) {
            alert("Pasas gratis por ser el primero despues de las 2AM");
        } else{
            alert("Podes pasar pero tenes que pagar la entrada");
        } 
    } else {
            alert("Sos menor, no podes pasar");
        }
}

//ESTAMOS LLAMANDO A LA FUNCION validarCliente
//LOS VALRORES HACEN REFERENCIA A LA HORA A LA CUAL ASISTEN LOS INVITADO
validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(1);
validarCliente(4);
