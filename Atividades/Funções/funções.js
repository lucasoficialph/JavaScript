//   Usando uma função simples

const n1 = 15
const n2 = 20

function soma() {
    n1 + n2
}


//   Uma função com o comando return

function somaAdicao() {
    const n1 = 10
    const n2 = 20
    res = n1 + n2
    return res
}

//  Função com usando condicionais

function somaCondicionais(numero1, numero2) {
    const res = numero1 + numero2
    if (numero1 > numero2) {
        console.log(`O numero ${numero1} é maior que ${numero2}.`)
    }
    else if (numero1 === numero2) {
        console.log(`Os numeros ${numero1} e ${numero2} São inguais!`)
    }
    else {
        console.log(`O numero ${numero2} é maior que o ${numero1}.`)
    }
    return res
}

soma()

console.log(somaAdicao())

console.log(somaCondicionais(10, 10))