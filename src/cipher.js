
export const cipher ={
  encode,
  decode 
  }

function encode(text, displace){
  let array = text.split('');
      let encrypted = '';
      array.forEach(function (element) {
        let index = element.charCodeAt(0);
        if ((index > 64 && index < 91) || (index > 96 && index < 123)) {
          let x = (index < 91) ? 65 : 97;
          let newIndex = (index - x + displace) % 26 + x;
          encrypted += String.fromCharCode(newIndex);
        } else {
          encrypted += element;
        }
      });
      return encrypted;
  
}

function decode(text, displace){
  let array = text.split('');
  let encrypted = '';
  array.forEach(function (element) {
    let index = element.charCodeAt(0);
    if ((index > 64 && index < 91) || (index > 96 && index < 123)) {
      let x = (index < 91) ? 90 : 122;
      let newIndex = x - (x - index + displace) % 26;
      encrypted += String.fromCharCode(newIndex);
    } else {
      encrypted += element;
    }
  });
  return encrypted;
}
export default cipher;