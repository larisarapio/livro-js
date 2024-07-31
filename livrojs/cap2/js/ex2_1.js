function mostrarOla() {
    var nome = document.getElementById("nome").value;
    // antes era ...innerHtml ... 
    document.getElementById("resposta").textContent = 'Olá ' + nome;
    
}

//cria referencia ao botão com id = mostrar
var mostrar = document.getElementById("mostrar");
// antes era mostrar.onclick = mostrarOla
mostrar.addEventListener("click", mostrarOla)  // listener registra MULTIFUNÇÕES

// dessa forma antiga que fora comentada acima, é uma forma incoveniente
// pois há uma impossibilidade de anexar mais de uma função a um mesmo evento