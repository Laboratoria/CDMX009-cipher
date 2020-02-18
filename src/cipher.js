function mostrar(){
   div1 = document.getElementById("root").style.display = 'none';
   div2 = document.getElementById("root2").style.display = 'block';

}


function  encode(){
   div =  document.getElementById("root2").style.display = 'none';
  div4 = document.getElementById("root3").style.display= 'block';

    let name = document.getElementById("name").value;
    let offset = document.getElementById("Age").value;
    let string = name.toUpperCase();

    let newString = [''];

 
    offset = offset % 26;
    for(let i = 0; i < string.length; i++){
      let codestring = string.charCodeAt(i);
      if (codestring >= 65 && codestring <= 90){
    newString +=  String.fromCharCode((codestring - 65 + offset)% 26 + 65);
    result = document.getElementById("result").value =  newString;
   
    }
     }
    }

    function next(){
      div5 = document.getElementById("root3").style.display = "none";
       div6 = document.getElementById("root4").style.display = "block";
 }

function decode(){

      let edad = document.getElementById("codigo").value;
      let codedecode = document.getElementById("Age").value;
       let code =  [''];

     codedecode = codedecode % 26;
     for(let i = 0; i < edad.length; i++){
       let AgeCode  = edad.charCodeAt(i);
       if (AgeCode >= 65 && AgeCode <= 90){
     code +=  String.fromCharCode((AgeCode + 65 - codedecode)% 26 + 65);
     resultt = document.getElementById("dato").value = code;
     Ageuser = document.getElementById("AgeUser").value = codedecode;
       }
      }

}
    

    