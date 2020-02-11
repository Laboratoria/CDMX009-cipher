function getText() {
    var x = document.getElementById("text").value;
    document.getElementById("demo").innerHTML = x;
  }
function despN() {    
  for (let x = 1; x < 26; x++) {
    document.write("<option>" + x + "<option>");
  }
}

// function myFunctionTest() {
//   let tex= document.getElementById("text").value;
// let conv= tex.charCodeAt();
// document.write(conv);
// }
 


//  function myFunctionTest() {
//   let tex= document.getElementById("desplazamiento").value;

// document.write(tex);
// }
// function myFunctionTest() {
// let offset= document.getElementById("desplazamiento").value;
// let tex= document.getElementById("text").value;
// let toConv= tex.charCodeAt();
// let position= parseInt(toConv)+ parseInt (offset);
// // document.write(position);
// let texConv= String.fromCharCode(position);
// document.write(texConv);
// }



// function myFunctionTest() {

//   let tex= document.getElementById("text").value;
//   let offset= document.getElementById("desplazamiento").value;
// for (let index = 0; index < tex.length; index++) {
 
   
    
//     let toConv= tex.charCodeAt(index);
//     let position= parseInt(toConv)+ parseInt (offset);
//     // document.write(position);
//     let texConv= String.fromCharCode(position);
//     document.write(texConv);
//     }
  
// }

function myFunctionTest() {

  let tex= document.getElementById("text").value;
  let offset= document.getElementById("desplazamiento").value;
for (let index = 0; index < tex.length; index++) {
  let toConv= tex.charCodeAt(index);
 if (toConv === 32) {
  let position= 32;
   
 } else {  
    
    
    let position= parseInt(toConv)+ parseInt (offset);
    // document.write(position); 
  
    let texConv= String.fromCharCode(position);

  
    document.write(texConv);
  } 
  
}
}



 