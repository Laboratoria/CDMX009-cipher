

//1crear una fuction para cifrar//
function code() {
  //traer los datos del usuario-nombre//
  let name = document.getElementById("nombre").value;
  //traer el valor del desplazaamiento//
  let offset = document.getElementById("numero").value;
//convertir las letras en mayusculas//
let may = name.toUpperCase();
//crear una variable vacia donde se almacenara la palabra cifrada//
  let newPalabra='';
  //declra el offset//
  offset = offset %26;
  //obtener los indices del nombre(dato de usuario)//
  for (let i=0; i < may.length; i++){
    //obtener codigo ascii de cada letra del nombre//
    let palabra = may.charCodeAt(i);
    //declara el rango de codigos ascii, solo las mayusculas//
     if(palabra >= 65 && palabra<=90){
       //convertir el codigo ascii de cada letra obtenido a un nuevo codigo ascii agregando el desplazamiento(formula)//
      newPalabra = String.fromCharCode((palabra - 65 + offset)%26 +65);

  document.write("<rot>" + newPalabra + "<rot>");

  }
  }
  }

  function decifrar(){
    let codigo = document.getElementById("codigo").value;
    let offset = document.getElementById("numero").value;
    let promocion='';
    offset = offset %26;
    for (let i=0; i < codigo.length; i++){
      let neCod = codigo.charCodeAt(i);
      if(neCod >= 65 && neCod<=90){
        promocion  = String.fromCharCode((neCod + 65 - offset - 26)%26 +65);
        console.log(promocion);

    }
  }
 


