const cipher =  { 
     encode: function(string , offset){
    let newString = '';
    for (let i = 0; i < string.length; i++ ){
        let codeChar = string.charCodeAt(i);
        if(codeChar >= 65 && codeChar <=90 ){
            newString += String.fromCharCode((codeChar - 65 + offset)% 26 + 65);
      }
    }
    return newString;
  },

decode : function(codepromo, age){
    let dateUser = '';
    let ageuser = '';
    for(let i = 0; i < codepromo.length; i++){
        let Agecode = codepromo.charCodeAt(i);
        if(Agecode >= 65 && Agecode <= 90){
        dateUser += String.fromCharCode((Agecode + 65 - age)%26 +65);
        name = document.getElementById('nameUser').value = dateUser;
       user = document.getElementById('Age').value = ageuser;
        }
    }
    return name;
}
};
export default cipher;


