
const cipher = {
  encode: (offset, string) => {//offset es el número de desplazamiento
    //string es el mensaje a cifrar
  let codeCipher, position; //codecipher ->codigo ascci de letra 
  //position ->posicion de la letra cifrada en el alfabeto
  let messResult = '';//Resultado de mensaje descifrado

   for (let i=0; i <string.length; i++){ //Recorrido de los caracteres del string
     if(string[i] === ' '){ //Si el string tiene un espacio se deja igual
        messResult += ' ';
     }
     else{
       const codeAscii = string.charCodeAt(i);//Obtiene codigo Ascii de la letra
         if(codeAscii > 90){
           //Formula para Minusculas de 97-122
           position = codeAscii - 97 + (offset % 26);
           //Formula para obtener el codigo ascci en 97 empieza la a minuscula
           codeCipher = (position % 26) + 97;
           //Para Mayusculas de 65-90
         }else{
           position = codeAscii -65 + (offset % 26);
           codeCipher = (position % 26) + 65;
         }
          const letterCipher = string.fromCharCode(codeCipher);
          //Obtiene la letra que corresponde el codigo Ascii, ya cifrado
          messResult += letterCipher;
         }
     }
     return messResult;
   }
  
};

export default cipher; 
