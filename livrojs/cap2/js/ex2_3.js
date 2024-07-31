function mostrarInfos() {
    // mostrar valor de entrada 50 
    // e o saldo em 12x

    var inVeiculo = document.getElementById("inVeiculo");
    var inPreco = document.getElementById("inPreco");
    var outVeiculo = document.getElementById("outVeiculo");
    var outPreco = document.getElementById("outPreco");
  
    var veiculo = inVeiculo.value;
    var preco = Number(inPreco.value);
    var entradaValor = preco*0.5;
    var saldo = entradaValor/12;

    outVeiculo.textContent = 'Promoção: ' + veiculo;
    outPreco.textContent = 'Entrada de R$ ' + entradaValor.toFixed(2) + '\n+12x de R$ ' + saldo.toFixed(2);
}   

var btPromo = document.getElementById("btPromo");
btPromo.addEventListener("click", mostrarInfos);