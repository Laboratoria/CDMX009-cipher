const cipher = {
    encode: function(offset, textOrigen) {
        var newCadena = "";
        for (let index = 0; index < textOrigen.length; index++) {
            var caracter = textOrigen.charAt(index);
            var caracterASCII = caracter.charCodeAt(0);
            var newCaracterASCII = ((caracterASCII - 65 + offset) % 26 + 65);
            newCadena += String.fromCharCode(newCaracterASCII);
        }

        return newCadena;
    },
    decode: function(offset, textOrigen) {
        var newCadena = "";
        for (let index = 0; index < textOrigen.length; index++) {
            var caracter = textOrigen.charAt(index);
            var caracterASCII = caracter.charCodeAt(0);
            var newCaracterASCII = ((caracterASCII - 65 - offset) % 26 + 65);
            newCadena += String.fromCharCode(newCaracterASCII);
        }

        return newCadena;
    }
};

export default cipher;