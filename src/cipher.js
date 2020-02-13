window.cipher = {
    encode: (string, offset) => {
        //mensaje recibido
        let msg = "";
        for (let i = 0; i < string.length; i++) {
            let caracteres = string[i];
            if (caracteres.match(/[a-z]/i)) {
                if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                    let texto = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
                    msg += String.fromCharCode(texto);
                } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                    texto = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
                    msg += String.fromCharCode(texto);
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
                    let texto = (string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
                    msgdecode += String.fromCharCode(texto);
                    console.log("entra");
                } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                    let texto = ((string.charCodeAt(i) - 97 - parseInt(offset) + 52) % 26) + 97;
                    msgdecode += String.fromCharCode(texto);
                }



            } else {
                msgdecode += caracterdecode;
            }
        }
        //retornar respuesta
        return msgdecode;
    }
}