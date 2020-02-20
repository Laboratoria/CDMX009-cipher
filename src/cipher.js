//-----EL UX ES MI PASIÓN------------




const cipher = {
encode: (offset, string) => {
        //mensaje recibido
		let textChar;
        let msgCipher = "";
	
		if(typeof string === "string") {
        for (let i = 0; i < string.length; i++) {
            let character = string[i];
            if (character.match(/[a-z]/i)) {
                if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                    let textChar = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
                    msgCipher += String.fromCharCode(textChar);                } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                    textChar = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
                    msgCipher += String.fromCharCode(textChar);
                }
            } else {
                msgCipher += character;
            }
        }
        return msgCipher;
	}
	else{
		throw TypeError('no p')
	}
    },
    decode: (offset, string) => {
        //mensaje recibido
        let msgDecipher = "";

        //inicio recorrido de caracteres
        for (let i = 0; i < string.length; i++) {
            let characterD = string[i];
            //identificacion de espacios vacios
            if (characterD.match(/[a-z]/i)) {
           

                if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                    let textChar = (string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
                    msgDecipher += String.fromCharCode(textChar);
                 
                } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                    let textChar = ((string.charCodeAt(i) - 97 - parseInt(offset) + 52) % 26) + 97;
                    msgDecipher += String.fromCharCode(textChar);
                }



            } else {
                msgDecipher += characterD;
            }
        }
        //retornar respuesta
        return msgDecipher;
    }

}

export default cipher;

