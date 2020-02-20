//const cipher = {

window.cipher = {
    encode: (desplazamiento, mensajeUsuario) => {
   //cuadro de texto cifrado mayusculas
    // strings length representa la longitud de una cadena
    //toUpperCase letras mayusculas
    //charCodeAt devuelve un numero indicando del valor
    //parseaInd convierte un argumento de tipo cadena en numero entero
    //string.fromCharCode:método estático que devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
        let InfCifrada = "" ;
            for (let i = 0; i < mensajeUsuario.length; i++) {
        let mensajeMayuscula = mensajeUsuario.toUpperCase();
        let mensaje2 =(mensajeMayuscula.charCodeAt(i) - 65 + parseInt(desplazamiento)) % 26 + 65;
        let resultado = String.fromCharCode(mensaje2);
        InfCifrada += resultado;
            }
        return InfCifrada;
        },

    //cuadro de texto cifrado mayusculas
    // strings length representa la longitud de una cadena
    //toUpperCase letras mayusculas
    //charCodeAt devuelve un numero indicando del valor
    //parseaInd convierte un argumento de tipo cadena en numero entero
    //string.fromCharCode:método estático que devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
     decode:(desplazamiento, mensajeUsuario) => {
    

        let InfDesifrada= "" ;
            for (let i = 0; i < mensajeUsuario.length; i++) {
        let textoDecifrada = (mensajeUsuario.charCodeAt(i) + 65 - parseInt(desplazamiento)) % 26 + 65;
        let resultado = String.fromCharCode(textoDecifrada);

            InfDesifrada += resultado;
            }
        return InfDesifrada;
        
        }

    };
//};




//export default cipher;/
