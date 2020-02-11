/*

const cipher = {
  // ...
};

export default cipher;

*/
{
    var output; //se crea una variable de salida de resultado
    for (let i = 0; i < str.length; i++) { // Recorriendo cada posición de la frase ingresada.
        let c = str[i]; // Se obtiene un array con cada posición de la frase.
        let patron = /^[a-zA-Z\s]*$/;
        if (!c.search(patron)) { // Se comprueba que el nuevo array solo contenga letras.
            let code = str.charCodeAt(i); // Se obtiene el número en dotación ASCII.
            // Se compara para aplicar fórmula de mayúsculas o minúsculas
            if ((code >= 65) && (code <= 90)) {
                c = String.fromCharCode(((code - 65 + 33) % 26) + 65);
            } else if ((code >= 97) && (code <= 122)) {
                c = String.fromCharCode(((code - 97 + 33) % 26) + 97);
            } else {
                return 'Ingrese solo texto';
            }
            output += c;
        }
        // Se muestra el resultado en pantalla.
    }
    document.write('El resultado es: ' + output);
}