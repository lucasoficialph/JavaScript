function marioPula() {
    let mario = document.querySelector(".marioCorrendo")
    mario.style = "animation: marioPula 1s ease-in-out;"
}

function marioNaoPula() {
    let mario = document.querySelector(".marioCorrendo").style = "animation"
    removeProperty(mario)
}