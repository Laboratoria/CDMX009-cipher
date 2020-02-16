const cipher = {
    encode (desplazamiento, texto){
        let resultado= "";
        for (let i=0;i<=texto.length;i++){
        let codificar= texto.charCodeAt(i);
        let parseado= parseInt(desplazamiento);
        let paso1= codificar-65+parseado;
        let paso2= (paso1)%26+65;
        let conversion= String.fromCharCode(paso2);
        resultado += conversion;
        return resultado;
  }       }
    
};
export default cipher;