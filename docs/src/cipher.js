

const cipher = {encode,decode};

    function encode(nameAlias,letterOffset){
        let result = "";
        for (let i=0; i < nameAlias.length;i++){
            let capitalLetters= nameAlias.toUpperCase();
            let ascii= capitalLetters.charCodeAt(i);
            let encodeAscii=((ascii - 65 + parseInt(letterOffset)) %26 + 65);
            result+=String.fromCharCode(encodeAscii);
            } return result;
            }

    function decode(nameAlias,letterOffset){
        let resultTwo= " ";
        for (let i=0; i < nameAlias.length;i++){
            let capitalLetters= nameAlias.toUpperCase();
            let ascii= capitalLetters.charCodeAt(i);
            let decodeAscii=((ascii + 65 - parseInt(letterOffset)) %26 + 65);
            resultTwo +=String.fromCharCode(decodeAscii);
            } return resultTwo; 
            }   
            
            //console.log(cipher.encode("ABCD",3));

            export default cipher; 