//EJEMPLO DE CREACION DE CLASE

class Animal{
    //ESTAMOS CARGANDO LOS PARAMETROS
    constructor(especie, edad, color){
        this.especie=especie;
        this.edad=edad;
        this.color=color;
        //  EL "``" SE ESCRIBE 'CONTROL' + 'ALT'+ LA TECLA PARA CERRAR LLAVES
        this.informacion= `Soy   ${this.especie},  tengo   ${this.edad} años de edad, 
        y soy de color ${this.color}`;   
    }
    verInformacion(){
        document.write(this.informacion + "<br>")
    }

}
     
//CREAMOS UNA CLASE 'PERRO' QUE HEREDA LAS CARACTERISTICAS DE ANIMAL 
//Y TAMBIEN OBTIENE EL METODO LADRAR
class Perro extends Animal{
    constructor(especie, edad, color){
        super(especie, edad, color);
    }
    ladrar(){
        alert("El perro hace: " + "WaW")
    }
}

//LLAMAMOS A LA CLASE Y CARGAMOS LOS VALORES DE LOS PARAMETROS
const perro = new Perro("perro", 10, "blanco");
const gato = new Animal("gato", 8, "negro");
const caballo = new Animal("caballo", 12, "marron");

perro.verInformacion();
perro.ladrar();
caballo.verInformacion();