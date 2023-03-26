function calcularImc() {
    let caminhoPeso = window.document.querySelector("#peso")
    let caminhoAltura = window.document.querySelector("#altura")
    let peso = parseFloat(caminhoPeso.value.replace(",","."))
    let altura = parseFloat(caminhoAltura.value.replace(",","."))
    let resultado = (peso / altura**2).toFixed(1)
    let meuImc = window.document.querySelector("#meuImc")
    meuImc.innerText = resultado
}