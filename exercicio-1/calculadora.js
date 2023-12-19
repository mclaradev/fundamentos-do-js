const numero1 = prompt("Digite um número: ")
const numero2 = prompt("Digite outro número: ")

const x = parseFloat(numero1)
const y = parseFloat(numero2)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert("Resultado:" +
"\nSoma: " + soma +
"\nSubtração: " + subtracao +
"\nMultiplicação: " + multiplicacao +
"\nDivisão: " + divisao)