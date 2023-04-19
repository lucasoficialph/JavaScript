let opcao1 = document.querySelector(".opcao1")
let opcao2 = document.querySelector(".opcao2")
let opcao3 = document.querySelector(".opcao3")

opcao1.addEventListener("mouseenter", function(){
    opcao1.classList.add("animacao_opcao")
})

opcao1.addEventListener("mouseleave", function(){
    opcao1.classList.remove("animacao_opcao")
})

opcao2.addEventListener("mouseenter", function(){
    opcao2.classList.add("animacao_opcao")
})

opcao2.addEventListener("mouseleave", function(){
    opcao2.classList.remove("animacao_opcao")
})

opcao3.addEventListener("mouseenter", function(){
    opcao3.classList.add("animacao_opcao")
})

opcao3.addEventListener("mouseleave", function(){
    opcao3.classList.remove("animacao_opcao")
})



let texto = document.querySelector('#text')
let tempo = 100
let frase = 'NEVER STOP EXPLORING THE WORLD.'

function showText(texto, frase, tempo){
    let fraseDividida = frase.split('').reverse()
    
    let digitador = setInterval(() => {

        if(!fraseDividida.length){
            return clearInterval(digitador)
        }

        const next = fraseDividida.pop()

        texto.innerHTML += next

    }, tempo)
}

showText(texto, frase, tempo)