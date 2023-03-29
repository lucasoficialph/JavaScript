let mario = document.querySelector("#marioCorrendo")
document.addEventListener("keydown", function(event){
    let eventos = event.key
    if(eventos === "ArrowUp"){
        mario.classList.add("marioPula")
        setTimeout(removeClass, 550)
    }
    console.log(eventos)
})

function removeClass(){
    mario.classList.remove("marioPula")
}

function impactoCano(){
    
}