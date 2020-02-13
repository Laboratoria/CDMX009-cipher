
export const cipher= {
    encode,
    decode
    //clean

}
function encode(offset, text){

  let characters = [];
  let concatenarCharacters="";
  let charnum=0;

  for (let i = 0; i < text.length; i++){
      charnum = Number.parseInt(text.charAt(i).charCodeAt(0));
      console.log(charnum);

      if ((charnum==32)) {
          charnum=charnum;
          console.log("x");

      }else if(65<=charnum && charnum<=90){
              charnum = (charnum -65 + offset)%26+65;
              console.log("mayusculas");

      }else if((97<=charnum && charnum<=122)){
              charnum=(charnum-97+ offset)%26+97;
              console.log("minusculas");
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
      charnum= Number.parseInt(text.charAt(i).charCodeAt(0));
      console.log(charnum);
      if ((charnum==32)) {
          charnum=charnum;
          console.log("x");
          
      } else if((65<=charnum && charnum <=90)){
          charnum = (charnum +65 - offset)%26+65;
          console.log("mayusculas");
          
      }else if(97<=charnum && charnum <=122) {
          charnum=(charnum+97- offset)%26+97;
          console.log("minusculas");
         }
  characters[i]=String.fromCharCode(charnum);
  concatenarCharacters += characters[i]+"";
  }
  return concatenarCharacters;
  
}
/*
function clean (){
    document.getElementById("resultado").innerText="";
  }*/
export default cipher;




