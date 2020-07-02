let abc= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let theWord = document.querySelector("#formulario1")
let boton =document.querySelector("#boton1") 
let result = document.querySelector("#resultado")
let offsetNum = document.querySelectorAll(".move")
const container = document.querySelector("#resultado")

function readWord(){
console.log(theWord.value.toString());
let array1 = console.log(theWord.value.toUpperCase().split('').filter(elem => elem !== " "));
let optionNum = document.getElementById("combo").value;
// console.log(theWord.value.charCodeAt('[0]'))
// console.log(theWord.value + " + " + optionNum);
}
boton.addEventListener("click", readWord)

function miArray(){
  console.log("mi array: ", readWord);
}
boton.addEventListener("click", miArray)




// var caesarShift = function(str, amount) {

// 	// Wrap the amount
// 	if (amount < 0)
// 		return caesarShift(str, amount + 26);

// 	// Make an output variable
// 	var output = '';

// 	// Go through each character
// 	for (var i = 0; i < str.length; i ++) {

// 		// Get the character we'll be appending
// 		var c = str[i];

// 		// If it's a letter...
// 		if (c.match(/[a-z]/i)) {

// 			// Get its code
// 			var code = str.charCodeAt(i);

// 			// Uppercase letters
// 			if ((code >= 65) && (code <= 90))
// 				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

// 			// Lowercase letters
// 			else if ((code >= 97) && (code <= 122))
// 				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

// 		}

// 		// Append
// 		output += c;

// 	}

// 	// All done!
// 	return output;

// };







// // function encrypt(string, shift) {
// //   var result = "";
// //   if (mode == "ceaser"){

// //       //loop through each caharacter in the text
// //       for (var i = 0; i < theWord.length; i++) {
            
// //            //get the character code of each letter
// //           var c = theWord.charCodeAt(i);

// //           // handle uppercase letters
// //           if(c >= 65 && c <=  90) {
// //              result += String.fromCharCode((c - 65 + shift) % 26 + 65); 

// //           // handle lowercase letters
// //           }else if(c >= 97 && c <= 122){
// //               result += String.fromCharCode((c - 97 + shift) % 26 + 97);

// //           // its not a letter, let it through
// //           }else {
// //               result += theWord.charAt(i);
// //           }
// //       }
// //   }
// //   return result;
// // }

// // function decrypt(readWord,shift){
// //   var result = "";
// //   shift = (26 - shift) % 26;
// //   result = encrypt(theWord,shift);
// //   return result;
// // }   
// // function myFunction(){

// // }
// // boton.addEventListener("click", myFunction)



// // function wordComponent(str){
// //   var strReverse = string.split('')
// //   console.log(wordComponent);
// // }
// // boton.addEventListener("click",wordComponent)




// // boton.addEventListener("click", wordComponent)


// // let convertString = string.split("");
// // console.log(convertString);




// // let convertString = theWord.toUpperCase().split("");
// console.log(convertString);
// }
// boton.addEventListener("click", readWord)
// readWord(theWord)

// let convertString = string.toUpperCase().split("");
// console.log(convertString);

// let newArray = convertString.filter(elem => elem !== " ")  
// console.log(newArray)

// var n = string.charCodeAt();
// console.log(n)

// let newString = string.toUpperCase().replace(/ /g, "")
// if(newString === newArray)  
// {
//   console.log("La palabra es palíndromo")
// }
// else{
//  console.log("La palabra no es palíndromo") 
// }  


//     oneWord("abismo");

  