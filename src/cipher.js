const cipher = {
  encode,
  decode
}
export default cipher;

function encode(str, offset) {
  let solved = "";
  let oldAscii;
  let newAscii;
  for (var i=0; i < str.length; i++) {              //Esta parte le dice al bucle que debe repetirse hasta llegar a la última letra.
        oldAscii = str.charCodeAt(i);               //Esto genera el códigos ascii de cada letra
        newAscii = (((oldAscii -65 + parseInt(offset)) %26)+ 65);//Esto genera el número por el que se debe desplazar el alfabeto y lo suma a la posicion original de cada letra

        solved += String.fromCharCode(newAscii);    //Esta parte llama a la nueva letra a partir de los nuevos codigos ascii de las nuevas posiciones, el += genera un array(string vertical), pues va agregando en cada iteración la siguiente letra
        }
        /*if (oldAscii>=65 && oldAscii =<90) {
        for //Aplica el bucle for de arriba
      }else { // Si no está entre 65 y 90, entonces recupera los espacios y cualquier otro dígito y sólo los pasa al resultado en la posición original.
          solved+= str[i];
      }*/

return(solved);
}

//encode("HOLA", 7);
/*encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1);
encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 2);
encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 3);
encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 4);
encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 5);
encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 6);
encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 7);
encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 8);
encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 9);
encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 10);
encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 11);
encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 12);
encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 13);
encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 14);
encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 15);
encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16);
encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 17);
encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 18);
encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 19);
encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 20);
encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 21);

encode("TEQUIEROMUCHOTAVO", 33);
*/
//DECODE
function decode(str, offset) {
  let solved = "";
  let oldAscii;
  let newAscii;
  for (var i=0; i < str.length; i++) {
        oldAscii = str.charCodeAt(i);
        newAscii = (((oldAscii +65 - parseInt(offset)) %26)+ 65);
        solved += String.fromCharCode(newAscii);

        }
        /*else { //Esto recupera los espacios y cualquier otro dígito fuera 65 y 90 y sólo los pasa al resultado en la posición original.

          solved+= str[i];
      }*/
return(solved);
}

/*decode("BCDEFGHIJKLMNOPQRSTUVWXYZA", 1);
decode("CDEFGHIJKLMNOPQRSTUVWXYZAB", 2);
decode("DEFGHIJKLMNOPQRSTUVWXYZABC", 3);
decode("EFGHIJKLMNOPQRSTUVWXYZABCD", 4);
decode("FGHIJKLMNOPQRSTUVWXYZABCDE", 5);
decode("GHIJKLMNOPQRSTUVWXYZABCDEF", 6);
decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 7);
decode("IJKLMNOPQRSTUVWXYZABCDEFGH", 8);
decode("JKLMNOPQRSTUVWXYZABCDEFGHI", 9);
decode("KLMNOPQRSTUVWXYZABCDEFGHIJ", 10);
decode("LMNOPQRSTUVWXYZABCDEFGHIJK", 11);
decode("MNOPQRSTUVWXYZABCDEFGHIJKL", 12);
decode("NOPQRSTUVWXYZABCDEFGHIJKLM", 13);
decode("OPQRSTUVWXYZABCDEFGHIJKLMN", 14);
decode("PQRSTUVWXYZABCDEFGHIJKLMNO", 15);
decode("QRSTUVWXYZABCDEFGHIJKLMNOP", 16);
decode("RSTUVWXYZABCDEFGHIJKLMNOPQ", 17);
decode("STUVWXYZABCDEFGHIJKLMNOPQR", 18);
decode("TUVWXYZABCDEFGHIJKLMNOPQRS", 19);
decode("UVWXYZABCDEFGHIJKLMNOPQRST", 20);
decode("VWXYZABCDEFGHIJKLMNOPQRSTU", 21);

decode("ALXBPLYVTBJOVAHCV", 33)

//-----Pruebas anteriores-------------------------------------------------
/*
Prueba 1
        if (asciiNum >= 65 && asciiNum <= 77) {
          solved += String.fromCharCode(asciiNum + number);
        }else if (asciiNum>=78 && asciiNum<=90) {
          solved+= String.fromCharCode(asciiNum - number);
        } else { //Esto recupera los espacios y sólo los pasa al resultado en la posición original.
          solved+= str[i];
        }
      }
      return solved;
}

encode("A");
console.log(encode("TE QUIERO MUCHO TAVO", 13));
*/
