const cipher = {
  // ...
};

export default cipher;



function myFunctionTest() {

  let tex= document.getElementById("text").value;
  let offset= document.getElementById("desplazamiento").value;
for (let index = 0; index < tex.length; index++) {
  let toConv= tex.charCodeAt(index);
  
 if (parseInt(toConv) >= 90) {
  let prePosition= parseInt(toConv)+ parseInt (offset);
  let x=26;
  let position= prePosition - x;
 }  
    
    
    let position= parseInt(toConv)+ parseInt (offset);
    // document.write(position); 
  
    let texConv= String.fromCharCode(position);

  
    document.write(texConv);
  
  
}
}

