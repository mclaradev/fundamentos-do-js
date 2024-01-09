// No javascript as funções podem ser atribuidas
// a variáveis como se elas fosse valores

function soma(a, b) {
    return a + b
}

// Repare que não usamos os () ao lado do nome da função,
// porque ao fazer isso estaríamos executando a função

const operacao = soma
console.log(operacao(5, 5))

// Para isso, podemos usar as funções anônimas, que
// nada mais são do que funções que não possuem um nome

function subtrair(a, b) {
    return a - b
}

console.log(subtrair(35, 10))

// Com as funções anônimas podemos, por exemplo,
// atribuir uma função a uma chave de objeto
const calculadora = {}
calculadora.somar = soma
calculadora.subtrair = subtrair
calculadora.multiplicar = function (a, b) {
  return a * b
}
console.log(calculadora.multiplicar(3, 7))

// Funções anônimas só podem ser chamadas após a atribuição da variável,
// elas não são jogadas para o topo do arquivo como funções normais
olaMundo()

function olaMundo() {
  console.log("Olá, mundo!")
}

const oiMundo = function () {
  console.log("Oi, mundo!")
}

oiMundo()