const cipher = {
   
    code : (nombre, edad) => {
    //variable que guarda al resultado cifrado o descifrado. tiene un string vacío porque aún no sabemos el valor   
    let result = '';
        //Ciclo for  para ir a través de cada caracter del texto
        for (var i = 0; i < nombre.length; i++) { 
            var c = nombre.charCodeAt(i);
            //Letras mayúsculas
            if(c >= 65 && c <=  90) {
               result += String.fromCharCode((c - 65 + edad) % 26 + 65); 
            //Letras minúsculas   
            }else if(c >= 97 && c <= 122){
                result += String.fromCharCode((c - 97 + edad) % 26 + 97);
            //En caso de que sea un número o cualquier otro caracter, lo dejamos pasar tal cual 
            }else {
                result += nombre.charAt(i);
            }
        }
    return result;
  },

    decode : (nombre, edad) => {
    let result = '';
    //Creamos un nuevo shift, en lugar de recorrer lugares a la derecha lo hacemos hacia la izquierda
    edad = (26 - edad) % 26;
    result = cipher.code(nombre, edad);
    return result;
}  

} 

export default cipher;