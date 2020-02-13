const cipher = {

paterno : document.getElementById('cifrar').value,
mes : parseInt(document.getElementById('movimientos').value), 

cifrado : function(paterno, mes) {
    mes = parseInt(mes % 26);    

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
        let nuevoIndex = actualIndex + mes;

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


desCifrado : function(paterno, mes) {
    mes = parseInt(mes % 26);    

    let datoMayusculas = paterno.toUpperCase();
    let alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let datoDesCifrado = '';

    for(let i = 0; i < datoMayusculas.length; i++) {
        let letraActual = datoMayusculas[i];
        if(letraActual === ' ') {
            datoDesCifrado += letraActual;
            continue;
        }

        let actualIndex = alfabeto.indexOf(letraActual);
        let nuevoIndex = actualIndex - mes;

        if(nuevoIndex > 25) {
            nuevoIndex = nuevoIndex - 26;
        } else if(nuevoIndex < 0) {
            nuevoIndex = nuevoIndex + 26;
        } else if(paterno[i] === paterno[i].toUpperCase()) {
            datoDesCifrado += alfabeto[nuevoIndex].toUpperCase();
        } else {
            datoDesCifrado += alfabeto[nuevoIndex]
        }
    }
    return datoDesCifrado;
}
};




//console.log(cipher(paterno, mes));




//'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//'abcdefghijklmnopqrstuvwxyz'

  


export default cipher;
