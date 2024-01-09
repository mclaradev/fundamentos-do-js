// Funções de alta-ordem, ou high-order functions, são funções que
// recebem outras funções como parâmetro e as executam em algum momento
function calcular(a, b, operacao) {
    console.log("Realizando uma operação")
    const resultado = operacao(a, b)
    return resultado
}

// Repare que não usamos os () ao lado do nome da função,
// porque ao fazer isso estaríamos executando a função

function somar(x, y) {
    console.log("Realizando uma soma")
    return x + y
}

console.log(calcular(5, 5, somar))
console.log(somar) // retorna a função
console.log(somar(5, 5)) // chama a função (retorna o resultado da função)

// Também podemos escrever funções anônimas dentro da própria chamada da high-order function

console.log(calcular(8, 5, function (x, y) {
    console.log("Realizando uma subtração")
    return x - y
}))

// Essas funções que são passadas como parâmetros geralmente são chamadas de callbacks
// Um exemplo comum de high-order function no javascript é a função .forEach() dos arrays

function exibirElemento(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
}

const listaTwice = ["Nayeon", "Jeongyeon", "Momo", "Sana", "Jihyo", "Mina", "Dahyun", "Chaeyoung", "Tzuyu"]

// forma tradicional:

for (let i = 0; i < listaTwice.length; i++) {
    exibirElemento(listaTwice[i], i, listaTwice)
}

// forma funcional

listaTwice.forEach(exibirElemento)

// também podemos fazer assim:

listaTwice.forEach(function (elemento, indice, array) {
    console.log({
      elemento,
      indice,
      array
    })
  })