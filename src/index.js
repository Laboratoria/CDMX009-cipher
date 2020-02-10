function recogeDatos() {

let nombre= document.getElementById("cajanombre").value;

if (nombre.length == " "){
    document.getElementById("advertencia").innerText = "Por favor poner tu nombre";
} else {
    document.getElementById("pantallaUno").style.display="none";
    document.getElementById("pantallaDos").style.display="block";
    document.getElementById("bienvenido").innerText= "Bienvenid@ " + nombre;
}
}