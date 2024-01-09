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
console.log(somar)
console.log(somar(5, 5))