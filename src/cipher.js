function mostrar(){
  let div1 =  document.getElementById("root").style.display = 'none';
   let div2 = document.getElementById("root2").style.display= 'block';
  }

function  encode(){
  let div1 =  document.getElementById("root2").style.display = 'none';
  let div2 = document.getElementById("root3").style.display= 'block';

    let name = document.getElementById("name").value;
    let offset = document.getElementById("Age").value;
    let string = name.toUpperCase();

    let newString = [''];

 
    offset = offset % 26;
    for(let i = 0; i < string.length; i++){
      let codestring = string.charCodeAt(i);
      if (codestring >= 65 && codestring <= 90){
    newString =  String.fromCharCode((codestring - 65 + offset)% 26 + 65);
   console.log(newString);
    }
     }
    }



 
    

    