const cipher = {

// OBTENIENDO LOS DATOS DEL USUARIO
paterno : document.getElementById('cifrarlo').value,
mes : parseInt(document.getElementById('movimientos').value), 

// FUNCIO PARA CIFRAR POR EL INDICE DEL ARRAY ALFABETO
cifrado : (paterno, mes) => {
    
    let datoMayusculas = paterno.toUpperCase();
    let alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let datoCifrado = '';

    for(let i = 0; i < datoMayusculas.length; i++) {
        let letraActual = datoMayusculas[i];
        if(letraActual === ' ') {
            datoCifrado += letraActual;
            continue;
        }

        let actualIndex = alfabeto.indexOf(letraActual);
        let nuevoIndex = (actualIndex + mes) % 26;

        if(nuevoIndex > 25) {
            nuevoIndex = nuevoIndex - 26;
        } else if(nuevoIndex < 0) {
            nuevoIndex = nuevoIndex + 26;
        } else if(paterno[i] === paterno[i].toUpperCase()) {
            datoCifrado += alfabeto[nuevoIndex].toUpperCase();
        } else {
            datoCifrado += alfabeto[nuevoIndex]
        }
    }
    return datoCifrado;
},

//FUNCION PARA DESCIFRAR

desCifrado : (paterno, mes) => {
    let datoDesCifrado = '';
    mes = (26 - mes) + mes;
    datoDesCifrado += cipher.cifrado(paterno, mes);

    return datoDesCifrado
}
};

export default cipher;
