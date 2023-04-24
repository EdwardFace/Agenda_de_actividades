let current_star_level;
const allstars = document.querySelectorAll('.star');
allstars.forEach((star,i)=>{
    star.onclick = function(){
        current_star_level = i+1;
       
        allstars.forEach((star,j)=>{
            if(current_star_level>= j+1){
                star.innerHTML = '&#9733';
            }else{
                star.innerHTML = '&#9734';
            }
        })
    }
});

class Encargado{
    rut;
    nombre;
    imagenUrl;

    constructor(rut, nombre, imagenUrl){
        this.rut = rut;
        this.nombre = nombre;
        this.imagenUrl = imagenUrl;

    }

    get getRut(){
        return this.rut;
    }
    get getNombre(){
        return this.nombre;
    }
    get getimageUrl(){
        return this.getImageUrl;
    }
    set setRut(nvoRut){
        this.rut = nvoRut;
    }
    set setNombre(nvoNombre){
        this.nombre = nvoNombre;
    }
    set setImageUrl(nvoImage){
        this.imagenUrl = nvoImage;
    }
}

const userLogo = "img/user.png";
let encargados = [
    new Encargado("20.405.123-1","Eduardo Contreras",'img/users/1.jpg'),
    new Encargado("11.912.485-5","Mario Cifuentes","img/users/2.jpg")
];




function addTask(){
    

}

function searchUser(){
    let rut = document.querySelector('#rut').value;
    console.log(rut);
    let nombre = document.querySelector('#nombre');
    let imagenUrl = document.querySelector('#logoUser');

    let encargado = encargados.find(element=> element.rut == rut);
    
    if(encargado != undefined){
        nombre.value = encargado.nombre;
        imagenUrl.src = encargado.imagenUrl;
    }else{
        console.log('encargado no existe');
    }

}

function addTask(){
    let tabla = document.getElementById('tablaEncargados');
    let filaN = document.createElement('tr');
    

    let rut = document.querySelector('#rut').value;

    let nombre = document.querySelector('#nombre').value;
    let actividadNombre = document.querySelector('#nombreAct');
    let estatus = document.querySelector('#selectEstatus').value;
    let avance = document.querySelector('#avance').value;
    let fechaTermino = document.querySelector('#fechaTermino').value;


    let barra =  crearBarra(avance);
    let fecha = Date.parse(fechaTermino);

    let prioridad = allstars;

    for(i=0;i<7;i++){
        let fila = document.createElement('td');
        fila
    }
}


function crearBarra(avance){
    let barra = document.createElement('progress');
    barra.id = "fileBarra";
    barra.max = 100;

    return barra;
}
function insertarDatos(rut,nombre,actividad,estatus,avance,fechaTermino,prioridad){
    let dato1 = document.createElement('td');
    dato1.innerHTML = rut;
    let dato2 = document.createElement('td');
    dato2
}


