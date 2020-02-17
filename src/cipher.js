const cipher = {
  encode,
  decode
};


 /*function encode (str){
  var solved = "";
  for(var i=0; i<str.length; i++){
    var asciiNumber = str[i].charCodeAt();
    if (asciiNumber >= 65 && asciiNumber <=77){
      solved += String.fromCharCode(asciiNumber + 2);
    } else if (asciiNumber>=78 && asciiNumber <=90) {
      solved += String.fromCharCode(asciiNumber - 2);
      ;
    }
  }
  return solved;
}


encode("O")

/ function encode (offset, str){
  let solved = ""; // En esta variable se va a almacenar el resultado de salida
  for(let i=0; i<str.length; i++) {
      let asciiNumber = str.charCodeAt(); // Con el CharCodeAt, se ubica el numero del caracter dentro del códico ascii
      if (asciiNumber >= 65 && asciiNumber <=90){
      solved += String.fromCharCode(asciiNumber + offset);
    }
  }
  return solved;
}

encode("P");*/

function encode (str, offset){  //declarando la función para codificar estableciendo sus dos parámetros: offset, que indicará el número de posiciones que se recorrerá la posición en el Abecedario
  let solved =""; //Se declara una variable vacía que es en donde se mostrará el resultado de la codificación según el número de posiciones que se recorra el abecedario
  for (let i=0; i<str.length; i++){// Se uliliza el loop for, en donde si la longitud del string es mayor que i, o sea mayor que cero, entonces en cada iteración se le va a ir sumando uno, y así pasarà de letra en letra
    let asciiNumber = str.charCodeAt(i); //Cuál es la diferencia entre  string[i].charCodeAt(); en esta variable se van a guardar todas las iteraciones del string o sea nos números del 65 al 90 del cógico ascii, justo lo que hace charCodeAt, es darte el número ascii del abecedario, obteniendo el codigo ascii. En el código ascii el alfabeto en mayúsculas inician en el 65, con charCodeAt se obtiene el codigo ascii de las letras
    let encodeWord = (asciiNumber - 65 + parseInt(offset)%26)+65;//Aquí por que se parsea el offset, ¿para que parseas el offset? obtener el código ascii del string ingresado por el usuario, aplicar la formula obteniendo así la nueva posicion,y luego otra vez pasarla a codigo ascii para que      para emplear la formula necesitamos la posicion de la letra en el alfabeto,(las compus usan el ascii para representar simbolos, caracteres) obtener el codigo ascii de las letras que el usuario ingresa en string, convertir a la posicion del alfabeto que nosotras entendemos, o sea el de 26 caracteres, aplicar la fórmula y con esa nueva posicion, pasarla a ascii para que la computadora nos muestre la nueva letra
    solved += String.fromCharCode(encodeWord); // += operador de asignacion(adicion), el String.fromCharCode es un método estático que devuelve una cadena mediante el uso de una secuencia de valores Unicode (ascii) especificada
  }
  return solved;
}
//encode ("YALEENTENDIPORFINNNNNNNN",49);


function decode (str, offset){  //declarando la función para codificar estableciendo sus dos parámetros: offset, que indicará el número de posiciones que se recorrerá la posición en el Abecedario
  let solved =""; //Se declara una variable vacía que es en donde se mostrará el resultado de la codificación según el número de posiciones que se recorra con offset
  for (let i=0; i<str.length; i++){// Se uliliza el loop for, en donde si la longitud del string es mayor que i, o sea mayor que cero, entonces en cada iteración se le va a ir sumando uno, y así pasarà de letra en letra
    let asciiNumber = str.charCodeAt(i); //Cuál es la diferencia entre  string[i].charCodeAt(); en esta variable se van a guardar todas las iteraciones del string o sea nos números del 65 al 90 del cógico ascii, justo lo que hace charCodeAt, es darte el número ascii del abecedario, obteniendo el codigo ascii. En el código ascii el alfabeto inician en el 65, con charCodeAt se obtiene el codigo ascii de las letras
    let encodeWord = (asciiNumber + 65 - parseInt(offset)%26)+65;// Aquí le estás diciendo que se recorra cierto numero de posiciones con el offset y que te vuelva a dar el nuevo número del código ascii. Aquí por que se parsea el offset, ¿para que parseas el offset? obtener el código ascii del string ingresado por el usuario, aplicar la formula obteniendo así la nueva posicion,y luego otra vez pasarla a codigo ascii para que      para emplear la formula necesitamos la posicion de la letra en el alfabeto,(las compus usan el ascii para representar simbolos, caracteres) obtener el codigo ascii de las letras que el usuario ingresa en string, convertir a la posicion del alfabeto que nosotras entendemos, o sea el de 26 caracteres, aplicar la fórmula y con esa nueva posicion, pasarla a ascii para que la computadora nos muestre la nueva letra
    solved += String.fromCharCode(encodeWord); // += operador de asignacion(adicion), el String.fromCharCode es un método estático que devuelve una cadena mediante el uso de una secuencia de valores Unicode (ascii) especificada y funciona del la manera inversa de charCodeAt, o sea pasa el nuero a letra
  }
  return solved;
}
 console.log(encode);
//decode ("C",2);

export default cipher;

 


 