function Somar(){
    var Parcela1 = parseInt(document.getElementById("inputNum1").value);
    var Parcela2 = parseInt(document.getElementById("inputNum2").value);
    let soma = parseInt(Parcela1 + Parcela2);

    document.getElementById("Resposta").innerHTML ="Total: "+ soma;
}
function Subtrair(){
    var minuendo  = document.getElementById("inputNum1").value;
    var subtraendo = document.getElementById("inputNum2").value;
    let diferença = minuendo - subtraendo
    
    document.getElementById("Resposta").innerHTML ="Diferença: "+ diferença; 
}
function Multiplicar(){
    var fator1 = document.getElementById("inputNum1").value;
    var fator2 = document.getElementById("inputNum2").value;
    let mult = fator1 * fator2

    document.getElementById("Resposta").innerHTML ="Produto: "+ mult;
}
function Dividir(){
    var dividendo = parseInt(document.getElementById("inputNum1").value);
    var divisor = parseInt(document.getElementById("inputNum2").value);
    let div = parseInt(dividendo / divisor)

    document.getElementById("Resposta").innerHTML ="Quociente: "+ div;
}