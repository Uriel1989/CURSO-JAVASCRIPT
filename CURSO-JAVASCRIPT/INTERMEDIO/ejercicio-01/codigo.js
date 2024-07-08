const materiasHTML = document.querySelector(".materias");

const materias=[
    {
        nombre: "Fisica 4",
        nota: 7
    },
    {
        nombre: "Matematica 3",
        nota: 8
    },
    {
        nombre: "Logica 3",
        nota: 6
    },
    {
        nombre: "Programacion 4",
        nota: 8
    },
    {
        nombre: "Quimica 2",
        nota: 5
    }
]

const obtenerMateria=(id)=>{
    return new Promise((resolve,reject)=>{
        materia = materias[id];
        if(materia==undefined)reject("La materia no existe");
        else setTimeout(()=>{resolve(materia)},Math.random()*400);
    })
}

const devolverMaterias=async ()=>{
    let materia=[];
    for (let i=0; i<materias.length; i++){
        materia[i]= await obtenerMateria(i);
        console-console.log(materia[i]);
        let newHTMLCode=`
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
        <div class="notas">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML +=newHTMLCode;
    }
}

devolverMaterias()