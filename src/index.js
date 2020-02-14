//función para recoger datos de nombre de usuario
import cipher from "./cipher.js";

function recogeDatos() {
    //variable que conecta con DOM y recoge id de caja de texto
    let nombre= document.getElementById("cajanombre").value;
     //Condicional para mandar alerta si no hay texto
    if (nombre.length == " "){
        document.getElementById("advertencia").innerText = "Por favor poner tu nombre";
    //Condicional para mandar a segunda pantalla y dar bienvenida
    } else {
        document.getElementById("pantallaUno").style.display="none";
        document.getElementById("pantallaDos").style.display="block";
        document.getElementById("bienvenido").innerText= "Bienvenid@ " + nombre;
    }
}
document.getElementById("botonSiguiente").addEventListener('click',recogeDatos);

//Aquí comienza interacción para cifrar/descifrar
let botonCifrar= document.getElementById("cifrando");
   function cifrar () {
        let texto= document.getElementById("cajaMensaje");
        let desplazamiento= document.getElementById("cajaClave");
        let resultadoMensaje= cipher.encode(desplazamiento,texto);
        document.getElementById("cajaResultado").innerHTML=resultadoMensaje;      
}

botonCifrar.addEventListener('click', cifrar);

recogeDatos();