
export default cipher; 

const cipher = {

    encode(nameAlias,letterOffset){
        let result = "";
        let nameAlias = document.getElementById("aliasName").value;
        let letterOffset = document.getElementById ("offset").value;
        for (let i=0; i < nameAlias.length;i++){
            let capitalLetters= nameAlias.toUpperCase();
            let ascii= capitalLetters.charCodeAt(i);
            let encodeAscii=((ascii - 65 + parseInt(letterOffset)) %26 + 65);
            result +=String.fromCharCode(encodeAscii);
            } return result
            },

    decode(nameAlias,letterOffset){
        let result= " ";
        let nameAlias = document.getElementById("aliasName").value;
        let letterOffset = document.getElementById ("offset").value;
        for (let i=0; i < nameAlias.length;i++){
            let capitalLetters= nameAlias.toUpperCase();
            let ascii= capitalLetters.charCodeAt(i);
            let decodeAscii=((ascii + 65 - parseInt(letterOffset)) %26 + 65);
            result +=String.fromCharCode(decodeAscii);
            } return result 
            }   
            };

export default cipher;