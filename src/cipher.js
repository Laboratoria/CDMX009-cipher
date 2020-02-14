/*

const cipher = {
  // ...
};

export default cipher;

*/
//Arrays – Un array es un conjunto de valores a los que se accede con un número.

//String -Un objeto que representa una serie de caracteres dentro de una cadena.
//Se Crea Con el: constructor String:new String( cadena )
//Parámetros: ->cadena :  IMPORTANTE -> Cualquier cadena(Texto).<-

var resultado = ""; //vendría siendo mi output

//PROBANDO CIFRAR
function cifrar() {
    resultado = "";
    let string = document.getElementById("mensajeInput").value; //lo enlazo con mi id de textarea

    console.log(string);
    let offset = document.getElementById("numerosCodificar").value; //lo enlazo con mi id de mi select el cual es el que contiene los números 


    let letras = string.split("");

    // EL SPLIT es un metodo por lo que siempre va a llevar paréntesis: split()
    // divide un String en un array.
    // me devuelve un array.
    //en cada uno de los elementos que encuentre lo que hace es cortar.


    letras.forEach(function(letra) { //forEach lo uso para recorrer cada uno de mis elemntos del array letras.
        codigo = letra.charCodeAt(); //en esta parte creé una variable de nombre código y uso el charCodeAt para convertir mis letras a su código ascii
        var c = 0;

        if ((codigo >= 65) && (codigo <= 90)) { //aquí coloco el limite de mis letras al número al que pertenecen mayor o igual
            c = String.fromCharCode((((codigo - 65) + parseInt(offset)) % 26) + 65); //ejecuto mi formula con variable de nombre c junto con el offset por ahora, para letras mayuscúlas

        } else if ((codigo >= 97) && (codigo <= 122)) { //ejecuto mi formula junto con el offset por ahora, para letras minúsculas
            c = String.fromCharCode((((codigo - 97) + parseInt(offset)) % 26) + 97);

        } else if (codigo == 32) {
            // c = String.fromCharCode(((codigo - 32 + offset) % 26) + 32);
            c = " "; //aquí le digo a mi código  que cuando haya un espacio lo respete y lo deje tal cuál
        }

        resultado += c;
    });
    document.getElementById('resultadocifrado').innerHTML = "Tu código es: " + resultado;

}

//PROBANDO DESCIFRAR 
function descifrar() {
    let offset2 = document.getElementById("numerosCodificar").value; //lo enlazo con mi id de mi select el cual es el que contiene los números
    let stringcifrado = resultado; //meto el resultado de mi cifrado
    console.log(resultado);


    let letrasdos = stringcifrado.split("");
    let resultadodos = ""; //vendría siendo mi output
    letrasdos.forEach(function(letra2) { //forEach lo uso para recorrer cada uno de mis elemntos del array letras. el parámetro que tengo dentro del mi función es lo que yo espero recibir en este caso letras
        codigodos = letra2.charCodeAt(); //en esta parte creé una variable de nombre códigodos y uso el fromCharCode para convertir mi código ascii a letras 


        if ((codigodos >= 65) && (codigodos <= 90)) {
            d = String.fromCharCode((((codigodos - 65) - parseInt(offset2)) % 26) + 65);

        } else if ((codigodos >= 97) && (codigodos <= 122)) { //ejecuto mi formula junto con el offset por ahora, para letras minúsculas
            d = String.fromCharCode((((codigodos - 97) - parseInt(offset2)) % 26) + 97);

        } else if (codigodos == 32) { //El 32 es el código ascii para el espacio en blanco
            // c = String.fromCharCode(((codigo - 32 + offset) % 26) + 32);
            d = " "; //aquí le digo a mi código  que cuando haya un espacio lo respete y lo deje tal cuál
        }

        resultadodos += d;
    });
    document.getElementById('resultadodescifrado').innerHTML = "El mensaje escrito es: " + resultadodos;
}