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
    new Encargado("11.912.485-5","Mario Cifuentes","img/users/2.jpg"),
    new Encargado("5.678.154-1","Ezio Auditore","")
];
let meses = ['en','febr','mzo','abr','my','jun','jul','ag','sept','oct','nov','dic'];

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
let contador = 1;
function addTask(){
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

    insertarDatos(filaN,rut,contador,actividadNombre,estatus,barra,fechaFinal,tablaEstrella);
    tabla.appendChild(filaN);
    contador++;
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


