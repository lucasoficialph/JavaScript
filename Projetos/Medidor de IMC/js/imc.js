

function calcularImc() {
    let caminhoPeso = window.document.querySelector("#peso")
    let caminhoAltura = window.document.querySelector("#altura")
    let meuImc = window.document.querySelector("#meuImc")

    let peso = parseFloat(caminhoPeso.value)   
    let altura = parseFloat(caminhoAltura.value)    
    let resultado = (peso / altura**2).toFixed(1)
    meuImc.innerText = resultado

    let linha1 = document.querySelector("#linha1")
    let linha2 = document.querySelector("#linha2")
    let linha3 = document.querySelector("#linha3")
    let linha4 = document.querySelector("#linha4")
    let linha5 = document.querySelector("#linha5")
    let linha6 = document.querySelector("#linha6")

    if(resultado <= 18.5){
        linha1.style = "background-color: lightblue"
        linha2.style = "background-color: transparent"
        linha3.style = "background-color: transparent"
        linha4.style = "background-color: transparent"
        linha5.style = "background-color: transparent"
        linha6.style = "background-color: transparent"    
    }else if(resultado > 18.5 && resultado < 24.9){ 
        linha1.style = "background-color: transparent"
        linha2.style = "background-color: lightblue"
        linha3.style = "background-color: transparent"
        linha4.style = "background-color: transparent"
        linha5.style = "background-color: transparent"
        linha6.style = "background-color: transparent"
    }else if(resultado > 25.0 && resultado < 29.9){
        linha1.style = "background-color: transparent"
        linha2.style = "background-color: transparent"
        linha3.style = "background-color: lightblue"
        linha4.style = "background-color: transparent"
        linha5.style = "background-color: transparent"
        linha6.style = "background-color: transparent"
    }else if(resultado > 30.0 && resultado < 34.9){
        linha1.style = "background-color: transparent"
        linha2.style = "background-color: transparent"
        linha3.style = "background-color: transparent"
        linha4.style = "background-color: lightblue"
        linha5.style = "background-color: transparent"
        linha6.style = "background-color: transparent"
    }else if(resultado > 35.0 && resultado < 39.9){
        linha1.style = "background-color: transparent"
        linha2.style = "background-color: transparent"
        linha3.style = "background-color: transparent"
        linha4.style = "background-color: transparent"
        linha5.style = "background-color: lightblue"
        linha6.style = "background-color: transparent"
    }else if(resultado >= 40.0){
        linha1.style = "background-color: transparent"
        linha2.style = "background-color: transparent"
        linha3.style = "background-color: transparent"
        linha4.style = "background-color: transparent"
        linha5.style = "background-color: transparent"
        linha6.style = "background-color: lightblue"
    }
}

function mascaraPeso(){
    let peso = document.querySelector("#peso")
    if (peso.value.length == 2){peso.value += "."}
}

function mascaraAltura(){
    let altura = document.querySelector("#altura")
    if (altura.value.length == 1){altura.value += "."}
}

