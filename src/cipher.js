const cipher = {
  encode: (offset, string) => {
    let result = "";
    for (let i = 0; i < string.length; i++) {
      let str = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
      result += String.fromCharCode(str);
    }
    return result;
  },

  decode: (offset, string) => {
    let result = "";
    for (let i = 0; i < string.length; i++) {
      let str = (string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
      result += String.fromCharCode(str);
    }
    return result;
  }
};