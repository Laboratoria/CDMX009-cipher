import cipher from "./cipher.js";

    //variable que conecta con DOM y recoge id de caja de texto
    let nombre= document.getElementById("cajanombre").value;
    document.getElementById("siguiente").addEventListener('click',recogeDatos);
    document.getElementById("cifrando").addEventListener('click', cifrar);
    document.getElementById("descifrando").addEventListener('click', descifrar);

//función para recoger datos de nombre de usuario
function recogeDatos() {
     //Condicional para mandar alerta si no hay texto
    /*if (nombre.length == " "){
        document.getElementById("advertencia").innerText = "Por favor poner tu nombre";
    //Condicional para mandar a segunda pantalla y dar bienvenida
    } else {*/
        document.getElementById("pantallaUno").style.display="none";
        document.getElementById("pantallaDos").style.display="block";
        document.getElementById("bienvenido").innerText= "Bienvenid@ " + nombre;
    }

//Aquí comienza interacción para cifrar/descifrar
   function cifrar () {
        let texto= document.getElementById("cajaMensaje").value;
        let desplazamiento= document.getElementById("cajaClave").value;
        let resultadoMensaje= cipher.encode(texto,desplazamiento);
        document.getElementById("cajaResultado").innerHTML=resultadoMensaje;      
}

    function descifrar () {

    }