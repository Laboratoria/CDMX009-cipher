const cipher = {

  encode: (pass, offset) => {
  let cipherPass = '';
  
      for (let i = 0; i < pass.length; i++) {
           let chainPass = pass [i];
      if (chainPass.match(/[a-z]/i)) {
          let upperPass = pass.toUpperCase ();
          let cipherAscii = (upperPass.charCodeAt (i) - 65 + parseInt (offset)) %26 + 65;
          cipherPass += String.fromCharCode(cipherAscii);
  }
    else {
         cipherPass += chainPass;
  }
  }
 return cipherPass;
},
 
decode: (pass,offset) => {
 let decipherPass = '';
 
      for (let i = 0; i < pass.length; i++) {
           let chainPassword = pass[i];
      if (chainPassword.match (/[a-z]/i)){
           let upperPassword = pass.toUpperCase();
           let decipherAscii = (upperPassword.charCodeAt(i) + 65 - parseInt (offset)) % 26 + 65;
           decipherPass +=String.fromCharCode(decipherAscii);
  }
    else {
        decipherPass += chainPassword;
}
 }
  return decipherPass;
  }
} 

//console.log(cipher.encode("abc",3));

  export default cipher;
