let botaoClima = document.querySelector('.botao_clima')
let body = document.querySelector('body')
let sol = document.querySelector('.sol')
let lua = document.querySelector('.lua')
let dia = document.querySelector('.dia')
let star1 = document.querySelector('.star1')
let star2 = document.querySelector('.star2')
let star3 = document.querySelector('.star3')
let star4 = document.querySelector('.star4')
let star5 = document.querySelector('.star5')
let nuvens = document.querySelector('.img_nuvensIMG')


botaoClima.addEventListener('click', () => {

    lua.classList.toggle('sol_Lua_Mover')
    body.classList.toggle('bodyBackground')
    lua.classList.toggle('opacityLuaStar')
    sol.classList.toggle('sol_Lua_Mover')
    sol.classList.toggle('opacitySol')
    dia.classList.toggle('opacityBackground')
    nuvens.classList.toggle('moverNuvens')
    star1.classList.toggle('opacityLuaStar')
    star2.classList.toggle('opacityLuaStar')
    star3.classList.toggle('opacityLuaStar')
    star4.classList.toggle('opacityLuaStar')
    star5.classList.toggle('opacityLuaStar')

})