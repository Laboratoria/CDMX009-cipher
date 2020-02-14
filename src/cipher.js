
export const cipher= {
    encode,
    decode

}
function encode(offset, text){

  let characters = [];
  let concatenarCharacters="";
  let charnum=0;

  for (let i = 0; i < text.length; i++){
      charnum = parseInt(text.charAt(i).charCodeAt(0));
      console.log(charnum);
    
      if(64<charnum && charnum<91){
              charnum = (charnum -65 + offset)%26+65;
              console.log("mayusculas");
              console.log(charnum + "NUMERO TRANSFORMADO");

      }else if(96<charnum && charnum<123){
              charnum=(charnum-97+ offset)%26+97;
              console.log("minusculas");
              console.log(charnum + "NUMERO TRANSFORMADO");
      }else {
        charnum=charnum;
        console.log("x");
        console.log(charnum);

    }
      characters[i]=String.fromCharCode(charnum);
          concatenarCharacters += characters[i]+"";
  }
  return concatenarCharacters;
 
}

 function decode(offset, text){
    
  let characters = [];
  let charnum=0;
  let concatenarCharacters="";
  
  for (let i = 0; i < text.length; i++){
      charnum= parseInt(text.charAt(i).charCodeAt(0));
      console.log(charnum+ "NUMERO INGRESADO");
       if(64<charnum && charnum<91){
          charnum = (charnum + 65 - offset)%26 + 65;
          console.log("mayusculas");
          console.log(charnum + "NUMERO TRANSFORMADO");
          
      }else if(96<charnum && charnum<123) {
          charnum=(charnum - 45 -offset)%26 + 97;
          console.log("minusculas");
          console.log(charnum + "NUMERO TRANSFORMADO");
         }else {
            charnum=charnum;
            console.log("x");
            console.log(charnum + "NUMERO TRANSFORMADO");
        } 
  characters[i]=String.fromCharCode(charnum);
  concatenarCharacters += characters[i]+"";
  }
  return concatenarCharacters;
  
}

export default cipher;




