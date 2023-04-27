// Global vars
var current_star_level = 0;
var meses = ['en','febr','mzo','abr','my','jun','jul','ag','sept','oct','nov','dic'];
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

// Code execute when the page is load or reload
window.onload = (event) => {
    clearInputs()
    tareasRegistradas = 0;
};


function colorStars(value){
    current_star_level = value;
    let allstars = document.querySelectorAll('.star');
    allstars.forEach((star,i)=>{
        if(current_star_level>= i+1){
            star.innerHTML = '&#9733';
        }else{
            star.innerHTML = '&#9734';
        }
    });
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
        window.alert('RUT no registrado.');
        console.log('encargado no existe');
    }

}

function validateForm(actividadNombre, estatus, avance, fechaTermino, rut){
    let formValid = true;
    let encargado = encargados.find(element=> element.rut == rut);
    if(actividadNombre == ""){
        window.alert("Debe introducir el nombre de la actividad.");
        formValid = false;
    }else if(estatus == ""){
        window.alert("Debe seleccionar un estado de la actividad.");
        formValid = false;
    }else if(avance == ""){
        window.alert("Debe introducir un porcentaje de actividad.");
        formValid = false;
    }else if(avance<0 || avance>100){
        window.alert("El porcentaje de actividad debe ser entre 0% y 100%.");
        formValid = false;
    }else if(fechaTermino == ""){
        window.alert("Debe elegir una fecha de termino.");
        formValid = false;
    }else if(current_star_level<1 || current_star_level>5){
        window.alert("Debe calificar la prioridad entre 1 a 5 estrellas.");
        formValid = false;
    }else if(encargado == undefined){
        window.alert("RUT no registrado.");
        formValid = false;
    }
    return formValid;
}

function addTask(){
    let actividadNombre = document.querySelector('#nombreAct').value;
    let estatus = document.querySelector('#selectEstatus').value;
    let avance = document.querySelector('#avance').value;
    let fechaTermino = document.querySelector('#fechaTermino').value;
    let rut = document.querySelector('#rut').value;
    if(validateForm(actividadNombre, estatus, avance, fechaTermino, rut)){
        tareasRegistradas++;
        let tabla = document.getElementById('tablaEncargados');
        let filaN = document.createElement('tr');
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
    if(estatus == "Terminado"){
        dato4.style.background = 'green';
    }else if(estatus == "En curso"){
        dato4.style.background = 'yellow';
    }else{
        dato4.style.background = 'red';
    }
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
    clearInputs()
}

function clearInputs(){
    document.querySelector('#nombreAct').value = "";
    document.querySelector('#selectEstatus').value = "";
    document.querySelector('#avance').value = "";
    document.querySelector('#fechaTermino').value = "";
    document.querySelector('#rut').value = "";
    document.querySelector('#nombre').value = "";
    document.querySelector('#logoUser').src =userLogo;
    colorStars(0)
}