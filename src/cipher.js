const cipher = {
  encode (texto, desplazamiento){
      let resultado= '';
      let codificando;
      for (let i=0; i < texto.length; i++){
      let mayusculas= texto.toUpperCase();
      let ascii= mayusculas.charCodeAt(i);
      if (ascii==32) {
        codificando= 32;
      } else {
        codificando=((ascii - 65 + parseInt(desplazamiento)) %26 + 65);
       }
  resultado += String.fromCharCode(codificando);      
}    return resultado;
},
decode (texto, desplazamiento){
let resultado2= '';
let decodificando;
  for(let i=0 ;i < texto.length; i++){
    let mayusculas= texto.toUpperCase();
    let ascii= mayusculas.charCodeAt(i);
    if (ascii==32) {
      decodificando= 32;
    } else {
      decodificando=((ascii + 65 - parseInt(desplazamiento)) %26 + 65);
    }
    resultado2 += String.fromCharCode(decodificando);  
  } return resultado2;
}};
export default cipher;