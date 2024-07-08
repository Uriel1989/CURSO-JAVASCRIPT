
// cookies: clave=valor; atributo

// Una función de JavaScript que crea cookies en el navegador del usuario:


// Función newFechaUTC:

// Esta función toma un argumento dias, que representa la cantidad de días.
// Crea una nueva instancia de Date.
// Luego, ajusta la fecha sumando la cantidad de días especificada (convertida a milisegundos).
// Finalmente, devuelve la fecha en formato UTC (Coordinated Universal Time).

const newFechaUTC = dias => {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + dias*1000*60*60*24);
    return fecha.toUTCString();
}

// Función crearCookies:

// Esta función toma dos argumentos: name (nombre de la cookie) y dias (cantidad de días para que expire).
// Llama a la función newFechaUTC para obtener la fecha de expiración.
// Establece la cookie en el navegador con el nombre especificado y la fecha de expiración.

const crearCookie = (name,dias)=>{
    expires = newFechaUTC(dias)
    document.cookie =`${name};expires=${expires}`;
}

crearCookie("usuario=Uriel","4");


//Las cookies se almacenan en el navegador del cliente y no en el servidor. 
//Por lo tanto, este código debe ejecutarse en el contexto del navegador 
//(por ejemplo, en una página HTML) para que funcione correctamente.
