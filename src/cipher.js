let cipher = {
  encrypt: function(password, scrollNumber) {
    let result = password + scrollNumber;
    return result;
  },
  desencrypt: function(password, scrollNumber) {
    let result = password + scrollNumber;
    return result;
 }
};

export default cipher;
