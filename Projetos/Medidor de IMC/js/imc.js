function calcularImc() {
let caminhoPeso = window.document.querySelector("#peso")
let caminhoAltura = window.document.querySelector("#altura")
let peso = parseFloat(caminhoPeso.value)
let altura = parseFloat(caminhoAltura.value)**2

let resultado = (peso / altura).toFixed(1)

let meuImc = window.document.querySelector("#meuImc")
meuImc.innerText = resultado

console.log(resultado)}