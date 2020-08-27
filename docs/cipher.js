
export const cipher= {//objeto que voy a exportar
    encode,
    decode

}
function encode(offset, text){//funcion que codifica

  let characters = [];//string
  let concatenarCharacters="";//var para concatenar y que no me salga el resultado con comas
  let charnum=0;//esta es la var con la que convertire el texto a codigo ascii

  for (let i = 0; i < text.length; i++){//ciclo para convertir cada una de las letras a codigo ascii hacer la operacion y ver a que grupo pertenecen 
      charnum = parseInt(text.charAt(i).charCodeAt(0));//aqui el texto se convierte en codigo ascii
      console.log(charnum);//ayuda para visualizar mejor lo que sucede
    
      if(64<charnum && charnum<91){//esta es la condicion para las mayusculas
              charnum = (charnum -65 + offset)%26+65;//operacion para mayusculas
              console.log("mayusculas");//ver que todo ocurra como espero y que si tome las mayusculas como mayusculas
              console.log(charnum + "NUMERO TRANSFORMADO");//nuevo valor de la var charnum 

      }else if(96<charnum && charnum<123){//esta es la condicion para las minusculas
              charnum=(charnum-97+ offset)%26+97;//operacion para minusculas
              console.log("minusculas");//ver que todo ocurra como espero y que si tome las minusculas como minusculas
              console.log(charnum + "NUMERO TRANSFORMADO");//nuevo valor de la var charnum 
      }else {
        charnum=charnum;//operacion para otros caracteres
        console.log("x");//ver que todo ocurra como espero y que si tome lo demas como si nada
        console.log(charnum);//nuevo valor de la var charnum 

    }
      characters[i]=String.fromCharCode(charnum);//convierte a charnum de nuevo a letras y las agrega al string
          concatenarCharacters += characters[i]+"";//operacion para que no salgan con comas el resultado 
  }
  return concatenarCharacters;
 
}

 function decode(offset, text){//funcion que decodifica
    
  let characters = [];//string
  let charnum=0;//esta es la var con la que convertire el texto a codigo ascii
  let concatenarCharacters="";//var para concatenar y que no me salga el resultado con comas
  
  for (let i = 0; i < text.length; i++){//ciclo para convertir cada una de las letras a codigo ascii hacer la operacion y ver a que grupo pertenecen 
      charnum= parseInt(text.charAt(i).charCodeAt(0));//aqui el texto se convierte en codigo ascii
      console.log(charnum+ "NUMERO INGRESADO");//ayuda para visualizar mejor lo que sucede
       if(64<charnum && charnum<91){//esta es la condicion para las mayusculas
          charnum = (charnum + 65 - offset)%26 + 65;//operacion para mayusculas
          console.log("mayusculas");//ver que todo ocurra como espero y que si tome las mayusculas como mayusculas
          console.log(charnum + "NUMERO TRANSFORMADO");//nuevo valor de la var charnum 
          
      }else if(96<charnum && charnum<123) {//esta es la condicion para las minusculas
          charnum=(charnum - 45 -offset)%26 + 97;//operacion para minusculas
          console.log("minusculas");//ver que todo ocurra como espero y que si tome las minusculas como minusculas
          console.log(charnum + "NUMERO TRANSFORMADO");//nuevo valor de la var charnum 
         }else {
            charnum=charnum;//operacion para otros caracteres
            console.log("x");//ver que todo ocurra como espero y que si tome lo demas como si nada
            console.log(charnum + "NUMERO TRANSFORMADO");//nuevo valor de la var charnum 
        } 
  characters[i]=String.fromCharCode(charnum);//convierte a charnum de nuevo a letras y las agrega al string
  concatenarCharacters += characters[i]+"";//operacion para que no salgan con comas el resultado 
  }
  return concatenarCharacters;
  
}

export default cipher;




