//const cipher = {
  // ...
//};

//export default cipher;

window.cipher = {
    //método otorgado en el readme
    encode:(string, offset)=> {
        //Creando variable para box de encode
        let storyCipher = "";
        //for para recorrer los caracteres de las palabras
        for (let i = 0; i < string.length; i++) {
            //variable que representa el código acsii de cada letra en el string
            let character = string[i];
            //condición para cifrar mayúsuculas
                if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                    //acumulando los caracteres cifrados por medio de la formula larga
                    let storyCharacters = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
                    //retornando el cifrado del string agregando String.fromCharCode
                    storyCipher += String.fromCharCode(storyCharacters);
                  //condición para cifrar minúsculas
                } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                    //acumulando los caracteres cifrados por medio de la formula larga
                    storyCharacters = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
                    //retornando el cifrado del string agregando String.fromCharCode
                    storyCipher += String.fromCharCode(storyCharacters);
                }
              else {
                storyCipher += character;
            }
        }
        return storyCipher;
    },
    decode: (string, offset) => {
        //Creando variable para box de decode
        let storyDecipher = "";
        //for para recorrer los caracteres de las palabras
        for (let i = 0; i < string.length; i++) {
          //variable que representa el código acsii de cada letra en el string
              let characterDecipher = string[i];
          //condición para descifrar mayúsuculas
                  if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                    //acumulando los caracteres cifrados por medio de la formula larga
                      let storyCharacters = (string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
                      //retornando el cifrado del string agregando String.fromCharCode
                      storyDecipher += String.fromCharCode(storyCharacters);
                    //condición para descifrar minúsculas
                  } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                    //acumulando los caracteres cifrados por medio de la formula larga
                    let storyCharacters = ((string.charCodeAt(i) - 97 - parseInt(offset)) % 26) + 97;
                    //retornando el cifrado del string agregando String.fromCharCode
                    storyDecipher += String.fromCharCode(storyCharacters);
                } else {
                storyDecipher += characterDecipher;
        }
        //retornar respuesta
        return storyDecipher;
    }
}

}
