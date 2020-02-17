import cipher from './cipher.js';

/*console.log(cipher); */






function sendButton() {
    
document.getElementById("step1").style.display= "none";

        
document.getElementById("step2").style.display= "block";
       
}

document.getElementById("go").addEventListener("click",sendButton);

function step3() {
    
    document.getElementById("step2").style.display="none";
     document.getElementById("step3").style.display="block";
}

document.getElementById("discount").addEventListener("click",step3);

 
function redirectStepOne(){
    
     document.getElementById("step3").style.display="none";
     document.getElementById("step1").style.display="block";
}
    
   
document.getElementById("repeat").addEventListener("click",redirectStepOne);










