function calcularImc() {
    let caminhoPeso = window.document.querySelector("#peso")
    let caminhoAltura = window.document.querySelector("#altura")
    let peso = parseFloat(caminhoPeso.value.replace(/^(\d{2})(\d{1})/, "$1.$2"))
    let altura = parseFloat(caminhoAltura.value.replace(/^(\d{1})(\d{2})/, "$1.$2"))
    let resultado = (peso / altura**2).toFixed(1)
    let meuImc = window.document.querySelector("#meuImc")
    meuImc.innerText = resultado
}

function mascaraPeso(){
    let peso = document.querySelector("#peso")
    if (peso.value.length == 2){peso.value += "."}
}

function mascaraAltura(){
    let altura = document.querySelector("#altura")
    if (altura.value.length == 1){altura.value += "."}
}