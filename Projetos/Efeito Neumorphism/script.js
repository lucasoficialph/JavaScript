let circleOne = document.querySelector('.circle-one')
let circleTwo = document.querySelector('.circle-two')
let circleBtn = document.querySelector('.circle-btn')
let pause = document.querySelector('.pause')
let play = document.querySelector('.play')

circleBtn.addEventListener('click', (event) => {
    event.preventDefault()
    pause.classList.toggle('visibility')
    play.classList.toggle('visibility')
    circleOne.classList.toggle('paused')
    circleTwo.classList.toggle('paused')
    circleBtn.classList.toggle('shadow')
})