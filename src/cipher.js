const cipher = {
  cifrar,
  descifrar
}

function cifrar(offset, string){
 let mayusculas = string.toUpperCase();
let mensajecifrado='';
     offset = offset % 26;
     for (let i=0; i < mayusculas.length; i++){
       let palabra = mayusculas.charCodeAt(i);
       if (palabra >= 65 && palabra <= 90) {
   mensajecifrado = String.fromCharCode((palabra - 65 + offset)%26 +65);

           }
      }
      return mensajecifrado
}

function descifrar(offset, string){
 let mayusculas = string.toUpperCase();
let mensajedescifrado='';
     offset = offset % 26;
     for (let i=0; i < mayusculas.length; i++){
       let palabra = mayusculas.charCodeAt(i);
       if (palabra >= 65 && palabra <= 90) {
   mensajedescifrado = String.fromCharCode((palabra + 65 - offset)%26 +65);

           }
      }
      return mensajedescifrado

}


export default cipher
