function Media(){
    let Di = parseInt(document.getElementById("inputDi").value);
    let Df = parseInt(document.getElementById("inputDf").value);
    let Ti = parseInt(document.getElementById("inputTi").value);
    let Tf = parseInt(document.getElementById("inputTf").value);
    let VM = parseInt((Df - Di)/(Tf - Ti))
    
    document.getElementById("resposta").innerHTML = "Velocidade Média: "+ VM +" m/s"            
}