function Equação(){ 
    let a = parseInt(document.getElementById("inputA").value);
    let b = parseInt(document.getElementById("inputB").value);
    let equação = parseInt((a*a)+2*(a+b)+(b*b));

    document.getElementById("resposta").innerHTML = "Solução: "+ equação                       
   }