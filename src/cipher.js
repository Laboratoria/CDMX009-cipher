//objeto cipher para poder nombrarlo en index.js
const cipher = { encode,decode};

  export default cipher;
//Codificar
  function encode (string, offset) {
   let solved = ""; //Donde se va a imprimir el resultado
   let convertAscii; //Se almacena el codigo ASCII
   let newLetter; //Se alamacena "las nuevas letras" que se formaron con el codigo ASCII y el offset ya aplicado
   for(let i = 0; i < string.length; i++){
    let convertAscii= string.charCodeAt(i);
    if(convertAscii >= 97 &&convertAscii <=122){ //Si son minusculas, devuelve un error
      throw new TypeofError
    }else if (convertAscii >= 65 && convertAscii <= 90){
      let newLetter = (convertAscii-65+parseInt(offset))%26+65;
     solved += String.fromCharCode(newLetter);
    }
   }
   return(solved);
   }

   //Decodificar
  
   function decode(string,offset){
   let solved="";
   let convertAscii;
   let newLetter;
   for (let i = 0; i < string.length; i++){
     if (convertAscii >= 97 && convertAscii <=122){
       throw new TypeError       
     }else if (convertAscii >65 && convertAscii <=90){
       let newLetter = (convertAscii-65+parseInt(offset))%26+65;
       solved += String.fromCharCode(newLetter);
      }
   }
   return(solved);
  }