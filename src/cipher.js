const cipher = {
    nombre : document.getElementById('name').value,
    edad : parseInt(document.getElementById('shift').value), 
   
    code : (nombre, edad) => {
    let result = '';
        for (var i = 0; i < nombre.length; i++) { 
            var c = nombre.charCodeAt(i);
            if(c >= 65 && c <=  90) {
               result += String.fromCharCode((c - 65 + edad) % 26 + 65); 
            }else if(c >= 97 && c <= 122){
                result += String.fromCharCode((c - 97 + edad) % 26 + 97);
            }else {
                result += nombre.charAt(i);
            }
        }
    return result;
  },

    decode : (nombre, edad) => {
    let result = '';
    edad = (26 - edad) % 26;
    result = cipher.code(nombre, edad);
    return result;
}  

} 

export default cipher;