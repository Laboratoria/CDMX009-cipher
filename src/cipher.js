const cipher = {
    encode (texto, desplazamiento){
        let resultado= '';
        for (let i=0; i < texto.length; i++){
        let mayusculas= texto.toUpperCase();
        let ascii= mayusculas.charCodeAt(i);
        let codificando=((ascii - 65 + parseInt(desplazamiento)) %26 + 65);
        resultado += String.fromCharCode(codificando);
        
  }    return resultado;
  },
 decode (texto, desplazamiento){
  let resultado2= '';
    for(let i=0 ;i < texto.length; i++){
      let mayusculas= texto.toUpperCase();
      let ascii= mayusculas.charCodeAt(i);
      let decodificando=((ascii + 65 - parseInt(desplazamiento)) %26 + 65);
      resultado2 += String.fromCharCode(decodificando);
    } return resultado2;
  }};
export default cipher;