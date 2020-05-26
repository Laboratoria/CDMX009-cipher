const cipher = {

// OBTENIENDO LOS DATOS DEL USUARIO
offset : 'movimientos', 
string : 'cifrarlo',


// FUNCIO PARA CIFRAR POR EL INDICE DEL ARRAY ALFABETO
encode : (offset, string) => {
    
    let datoMayusculas = string.toUpperCase();
    let alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let datoCifrado = '';

    for(let i = 0; i < datoMayusculas.length; i++) {
        let letraActual = datoMayusculas[i];
        if(letraActual === ' ') {
            datoCifrado += letraActual;
            continue;
        }

        let actualIndex = alfabeto.indexOf(letraActual);
        let nuevoIndex = (actualIndex + offset) % 26;

        if(nuevoIndex > 25) {
            nuevoIndex = nuevoIndex - 26;
        } else if(nuevoIndex < 0) {
            nuevoIndex = nuevoIndex + 26;
        } else if(string[i] === string[i].toUpperCase()) {
            datoCifrado += alfabeto[nuevoIndex].toUpperCase();
        } else {
            datoCifrado += alfabeto[nuevoIndex]
        }
    }
    return datoCifrado;
},

//FUNCION PARA DESCIFRAR

decode : (offset, string) => {
    let datoDesCifrado = '';
    offset = (26 - offset) + offset;
    datoDesCifrado += cipher.encode(offset, string);

    return datoDesCifrado
}
};

export default cipher;
