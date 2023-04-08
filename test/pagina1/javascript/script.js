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