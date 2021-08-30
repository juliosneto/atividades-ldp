function Calcular(){
    let base = document.getElementById("inputBase").value;
    let altura = document.getElementById("inputAltura").value;
    let area = base * altura

    document.getElementById("RespostaArea").innerHTML =  "Área do retângulo: "+ area + "m²";
}