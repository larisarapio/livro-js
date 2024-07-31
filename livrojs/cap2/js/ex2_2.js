function mostrarInfos() {
    var inFilme = document.getElementById("inFilme");
    var inDuracao = document.getElementById("inDuracao");
    var outFilme = document.getElementById("outFilme");
    var outRespostas = document.getElementById("outRespostas");

    var filme = inFilme.value;
    var duracao = Number(inDuracao.value);  
    var horas = Math.floor(duracao / 60);
    var minutos = duracao % 60;

    outFilme.textContent = filme;
    outRespostas.textContent = horas + "hora(s) e "+ minutos + "minuto(s)";

    //document.getElementById("respostas").textContent = "Filme escolhido: " + filme + "\n Duração: " + duracao;
}

var btInfos = document.getElementById("btInfos");
btInfos.addEventListener("click", mostrarInfos)