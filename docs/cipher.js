function encode (){
let string = document.getElementById('name').value;
let offset = document.getElementById('Age').value;
let name = string.toUpperCase();
let newName = '';
offset = offset %26;
for(let i = 0; i < name.length; i++){
let codename = name.charCodeAt(i);
if(codename >= 65 && codename <=90){
newName += String.fromCharCode((codename - 65 + offset)%26 +65);
document.getElementById('result').value = newName;
   }
  }
}

 function decode(){
   let codeprom = document.getElementById('code').value;
   let offset = document.getElementById('Age').value;
   let codedecode = '';
   offset = offset %26;
   for(let i = 0; i < codeprom.length; i++){
     let code = codeprom.charCodeAt(i);
     if(code >= 65 && code <= 90){
       codedecode += String.fromCharCode((code + 65 - offset)%26 +65);
       document.getElementById('nameUser').value = codedecode;
       document.getElementById('AgeUser').value = offset;
     }
    }
   }




