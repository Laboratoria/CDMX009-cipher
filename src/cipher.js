const cipher = { cipher.encode
(offset, string)
};
export default cipher;


function cipher(string) = {
    let string= " "
    for = (let i= 0; i < string.length; i++) {
    let numberLetter = string.charCodeAt (i);
    let cipherFormula; 
    let newLetter; 
    if (numberLetter >= 65 && numberLetter <= 90);
    cipherFormula = ( numberLetter - 65 + 33) % 26 + 65;
    theNewLetter =  String.fromCharCode(cipherFormula);
    }

}
