const cipher = {
    encode(offset, textOrigen) {
        let newCadena = "";
        for (let index = 0; index < textOrigen.length; index++) {
            let caracter = textOrigen.charAt(index);
            let caracterASCII = caracter.charCodeAt(0);

            if (caracter == " " || caracterASCII < 65 || caracterASCII > 90) {
                newCadena += textOrigen.charAt(index);
            } else {
                var newCaracterASCII = ((caracterASCII - 65 + offset) % 26 + 65);
                newCadena += String.fromCharCode(newCaracterASCII);
            }
        }

        return newCadena;
    },
    decode(offset, textOrigen) {
        let newCadena = "";

        for (let index = 0; index < textOrigen.length; index++) {
            let caracter = textOrigen.charAt(index);
            let caracterASCII = caracter.charCodeAt(0);

            if (caracterASCII == 32 || caracterASCII < 65 || caracterASCII > 90) {
                newCadena += textOrigen.charAt(index);
            } else {
                var newCaracterASCII = ((caracterASCII - 65 - offset) % 26 + 65);
                newCadena += String.fromCharCode(newCaracterASCII);
            }

        }

        return newCadena;
    }
};

export default cipher;