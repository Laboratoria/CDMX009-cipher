const cipher = {
        encode: (offsetNumber, message) => {
            let encodeMessage = "";
            for (let i = 0; i < message.length; i++) {
                 let character = message[i];
            if (character.match(/[a-z]/i)){
                let upperCaseMessage = message.toUpperCase();
                let messageAscii = (upperCaseMessage.charCodeAt(i) - 65 + parseInt(offsetNumber)) % 26 + 65;
                encodeMessage += String.fromCharCode(messageAscii);
            }
            else if(message === null || offsetNumber === 0) {
                throw new TypeError
            }  
            else{
                encodeMessage += character;
            }             
            }
            return encodeMessage;
        },
        decode: (offsetNumber, message) => {
            let decodeMessage = "";
            for (let i = 0; i < message.length; i++) {
                let characterD = message[i];
            if (characterD.match(/[a-z]/i)){
                let upperCaseMessageD =message.toUpperCase();
                let messageAsciiD = (upperCaseMessageD.charCodeAt(i) + 65 - parseInt(offsetNumber))% 26 +65;
                decodeMessage += String.fromCharCode(messageAsciiD);
            }
            else if(message === null || offsetNumber === 0) {
                throw new TypeError
            } 
            else{
                decodeMessage += characterD;
            }
            }
            return decodeMessage;
        }
    }
export default cipher;