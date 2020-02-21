function screen(){
  document.getElementById("root").style.display = "none";
  document.getElementById("root2").style.display = "block";
}

let action = document.getElementById('result1');
action.addEventListener('click', screennext);
function screennext(){
  document.getElementById("root2").style.display = "none";
  document.getElementById("root3").style.display = "block";
}

function next(){
  document.getElementById("root3").style.display = "none";
  document.getElementById("root4").style.display = "block";
}
