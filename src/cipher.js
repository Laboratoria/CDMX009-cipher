function cifrar(){
 let offset = document.getElementById('numerosecreto').value;
 let string = document.getElementById('mensajesinconvertir').value;
 let mayusculas = string.toUpperCase();
let mensajecifrado='';
     offset = offset % 26;
     for (let i=0; i < mayusculas.length; i++){
       let palabra = mayusculas.charCodeAt(i);
       if (palabra >= 65 && palabra <= 90) {
   mensajecifrado = String.fromCharCode((palabra - 65 + offset)%26 +65);
   console.log(mensajecifrado);
   document.getElementById('resultado').innerHTML= mensajecifrado;

           }
      }
}
