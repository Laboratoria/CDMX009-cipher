//Se supone que este va a cifrar
const cipher = {
//variables    
    encode: (number, text) => {
        let asciiCode;
        let asciiNew;
        let asciiLetter;
        let textEncode = '';

//asignando valor a las variables

//función para codificar
    for (let i = 0; i < text.length; i++) {
       asciiCode= text.charCodeAt(i); 
         if (asciiCode >= 65 && asciiCode <= 90) 
          {
            asciiNew = (asciiCode - 65 + number) % 26 + 65;
            asciiLetter = String.fromCharCode(asciiNew);
          }
    
          textEncode=textEncode.concat(asciiLetter); 
          }
    return textEncode;


















export default cipher; }
}
