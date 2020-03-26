window.cipher = {
    encode: (string, offset) => {
        //mensaje recibido
        let msg = "";
        for (let i = 0; i < string.length; i++) {
            let caracteres = string[i];
            if (caracteres.match(/[a-z]/i)) {
                if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                    let frase = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
                    msg += String.fromCharCode(frase);
                } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                    frase = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
                    msg += String.fromCharCode(frase);
                }
            } else {
                msg += caracteres;
            }
        }
        return msg;
    },
    decode: (string, offset) => {
        //mensaje recibido
        let msgdecode = "";

        //inicio recorrido de caracteres
        for (let i = 0; i < string.length; i++) {
            let caracterdecode = string[i];
            //identificacion de espacios vacios
            if (caracterdecode.match(/[a-z]/i)) {
                console.log(string.charCodeAt(i));

                if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                    let frase = (string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
                    msgdecode += String.fromCharCode(frase);
                    console.log("entra");
                } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                    let frase = ((string.charCodeAt(i) - 97 - parseInt(offset) + 52) % 26) + 97;
                    msgdecode += String.fromCharCode(frase);
                }



            } else {
                msgdecode += caracterdecode;
            }
        }
        //retornar respuesta
        return msgdecode;
    }
}