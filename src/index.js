import cipher from './cipher.js';

//globales
let offset

// refs
let productos = document.querySelectorAll('.productos')

// funciones
function recibeClick(evento){
     // for que recorra productos y les quite la clase active (classList.remove("active"))
    evento.target.classList.add("active")
    offset = evento.target.id
   
}

// funcion para el clic de la palabra

console.log(cipher);

function segundapantalla() {
    let pantallas = document.getElementById("first-screen");
    pantallas.style = "display:none";
    document.getElementById("second-screen").style.display = "block";
}

document.getElementById("change").addEventListener("click", segundapantalla);

// observadores
productos[0].addEventListener('click',recibeClick )
productos[1].addEventListener('click',recibeClick )
productos[2].addEventListener('click',recibeClick )
productos[3].addEventListener('click',recibeClick )

/* Aqui, voy a trabajar con el evento que se dispara cuendo ocurre el evento click */




/*button.addEventListener("click", (encode) => { //con el .addEventListener se agrega un escuchador de evento del tipo evento click
    let word = document.getElementById();
})*/

// con document.getElementById estoy seleccionando un elemento del documento por medio del valor del atributo id que se le haya asignado. P elegir cualquier elemento cuyo identificador conozcamos para manipularlo posteriormente. 
let word = document.getElementById("btn"); 