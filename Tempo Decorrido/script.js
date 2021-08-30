function Total(){ 
    let horas = parseInt(document.getElementById("inputHoras").value);
    let minutos = parseInt(document.getElementById("inputMinutos").value);
    let segundos = parseInt(document.getElementById("inputSegundos").value);
    let totalseg = parseInt((horas * 3600)+(minutos * 60)+segundos);

    document.getElementById("resposta").innerHTML = "Total de segundos: "+ totalseg +" segundos"                        
   }