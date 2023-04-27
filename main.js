// Global vars
var current_star_level;
var meses = ['en','febr','mzo','abr','my','jun','jul','ag','sept','oct','nov','dic'];
var allstars = document.querySelectorAll('.star');
var tareasRegistradas = 0;

// Global consts
const userLogo = "img/user.png";

// Class to represent the people that can be found by RUT
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

// People that can be found by RUT
var encargados = [
    new Encargado("20.405.123-1","Eduardo Contreras",'img/users/1.jpg'),
    new Encargado("11.912.485-5","Mario Cifuentes","img/users/2.jpg"),
    new Encargado("5.678.154-1","Ezio Auditore","img/users/3.jpg"),
    new Encargado("20.506.194-9","Shay Cormac","img/users/4.jpg"),
    new Encargado("14.784.160-4","Aquiles Davenport","img/users/5.jpg"),
    new Encargado("17.532.156-9","Cristina Vespucci","img/users/6.jpg"),
    new Encargado("18.574.913-7","Maria Nieves","img/users/7.jpg"),
    new Encargado("13.964.141-8","Aveline Gramphe","img/users/88.jpg"),
    new Encargado("20.845.134-9","Andrea Paz","img/users/9.jpg"),
    new Encargado("18.174.184-1","Susy Garrido","img/users/10.jpg")
];

// Color the amount of starts clicked
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
    tareasRegistradas++;
    let tabla = document.getElementById('tablaEncargados');
    let filaN = document.createElement('tr');
    
    let rut = document.querySelector('#rut').value;
    let actividadNombre = document.querySelector('#nombreAct').value;
    let estatus = document.querySelector('#selectEstatus').value;
    let avance = document.querySelector('#avance').value;
    let fechaTermino = document.querySelector('#fechaTermino').value;
    console.log(fechaTermino)
    let barra =  crearBarra(avance);
    let fecha = new Date(fechaTermino);
    let fechaFinal = fecha.getDay()+' '+meses[fecha.getMonth()];
    
    let tablaEstrella = document.createElement('table');
    crearRating(tablaEstrella);

    insertarDatos(
        filaN,
        rut,
        tareasRegistradas,
        actividadNombre,
        estatus,
        barra,
        fechaFinal,
        tablaEstrella
    );
    tabla.appendChild(filaN);
}

function crearBarra(avance){
    let barra = document.createElement('progress');
    barra.id = "fileBarra";
    barra.max = 100;
    barra.value = avance;
    return barra;
}

function crearRating(tabla){
    let tupla = document.createElement('tr');
    for(let i=1;i<=5;i++){
        let estrella = document.createElement('td');
        if(current_star_level >= i){

            estrella.innerHTML = '&#9733';
            
        }else{
            
             estrella.innerHTML = '&#9734';

        }
        estrella.className="star"
        tupla.appendChild(estrella);
    }
    tabla.appendChild(tupla);
}

function insertarDatos(tupla,rut,numeroTupla,actividad,estatus,avance,fechaTermino,prioridad){
    let dato1 = document.createElement('td');
    dato1.innerHTML = numeroTupla;

    let dato2 = document.createElement('td');
    dato2.innerHTML = actividad;

    let dato3 = document.createElement('td');
    let imagen1 = document.createElement('img');
    let encargado = encargados.find(element=> element.rut == rut);
    imagen1.src = encargado.imagenUrl;
    imagen1.id = "logoUser";
    dato3.appendChild(imagen1);

    let dato4 = document.createElement('td');
    dato4.innerHTML = estatus;
    let dato5 = document.createElement('td');
    dato5.appendChild(avance);
    let dato6 = document.createElement('td');
    dato6.innerHTML = fechaTermino;
    let dato7 = document.createElement('td');
    dato7.appendChild(prioridad);

    tupla.appendChild(dato1);
    tupla.appendChild(dato2);
    tupla.appendChild(dato3);
    tupla.appendChild(dato4);
    tupla.appendChild(dato5);
    tupla.appendChild(dato6);
    tupla.appendChild(dato7);
}


