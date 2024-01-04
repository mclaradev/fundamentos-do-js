// Retorno é a saída da função

// O retorno é usado para armazenarmos a saída da função em uma variável
// Se não explicitarmos qual deve ser a saída da função, sua saída será undefined 

// function calcularMedia(a, b) {
//    const media = (a + b) / 2
// }
// const resultado = calcularMedia(5, 9)
// console.log(resultado) 

function calcularMedia(a, b) {
    const media = (a + b) / 2
    return media
}

console.log(calcularMedia(6, 8))

// Para dizer qual é a saída de uma função usamos o return

function produtos(nome, preco) {
    const produto = {
        nome,
        preco,
        estoque: 1
    }

    return produto
}

console.log(produtos("notebook acer aspire intel core i3", 2600))

// E o retorno não precisa ser uma variável,
// pode ser o resultado de qualquer expressão
function areaRetangular(base, altura) {
    return base * altura
  }
  console.log(areaRetangular(3, 5))
  // Ou até o retorno de outra função
  function areaQuadrada(lado) {
    return areaRetangular(lado, lado)
  }
  console.log(areaQuadrada(8))