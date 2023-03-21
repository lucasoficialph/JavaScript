//   formas de somar

let n1 = 10

n1 += 2
n1 -= 2
n1 *= 2
n1 /= 2

console.log(n1)

//   Operador condicional (ternário) 

x = 500
y = 300
if (x == y) {
    console.log("true")
}
else {
    console.log("false")
}

const res = x >= y ? "1" : 2

console.log("operador condicional (ternário)")
console.log(res)
console.log(typeof(res))

//   formatando Números

var numero = 1543.5

console.log(numero.toFixed(2))

numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

//   Convertendo número para Moeda

console.log(numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })) //   Mudar a sigla do país, muda a moeda.

//   Organizando Numeros

var numeros = [1, 3, 2, 5, 4, 7, 6, 8, 9,]; //   se houver dois digitos, o valor retornado, mas é incorrento.

console.log(numeros.sort());

