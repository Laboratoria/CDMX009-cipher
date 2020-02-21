

let containerResult = document.getElementById('container');


document.getElementById("btncifrar").addEventListener("click", () => {

  let toEncode= document.getElementById("message").value;
  let offset = parseInt(document.getElementById("offset").value);
  containerResult.innerHTML = cipher.encode(offset,toEncode);


  document.getElementById("btndescifrar").addEventListener("click", () => {
    let toDecode = document.getElementById("message").value;
    let offset = parseInt(document.getElementById("offset").value);
    containerResult.innerHTML = cipher.decode(offset,toDecode);
 

});
document.getElementById("resetbtn").addEventListener("click", () => {
  document.getElementById("message").value = "";
  document.getElementById("offset").value = "";
  document.getElementById("container").value = "";

});
});
