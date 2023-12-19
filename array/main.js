/* const listaDeCompras = []
console.log(listaDeCompras)

listaDeCompras[0] = "Feijão"
listaDeCompras[1] = "Arroz"
listaDeCompras[2] = "Cuscuz"
listaDeCompras[3] = "Macarrão"
listaDeCompras[6] = "Sal"
console.log(listaDeCompras) */

const arr = ["chipi", "chipi", "chapa", "chapa", "dubi", "dubi", "daba", "daba"]
console.log(arr)

// push: Adiciona um elemento no final do array e devolve o novo tamanho do array
let tamanho = arr.push("leru")
console.log(arr)
console.log(tamanho)

// unshift: Adiciona um elemento no começo do array e devolve o novo tamanho do array
tamanho = arr.unshift("leru")
console.log(arr)
console.log(tamanho)

// pop: Remove um elemento no final do array e devolve o elemento removido
let elementoRemovido = arr.pop("leru")
console.log(arr)
console.log(elementoRemovido)

// shift: Remove um elemento no começo do array e devolve o elemento removido
elementoRemovido = arr.shift("leru")
console.log(arr)
console.log(elementoRemovido)

// includes: Verifica se um certo elemento está presente no array 
const inclui = arr.includes("daba")
console.log(inclui)

// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array
const indice = arr.indexOf("daba")
console.log(indice)

// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original
const hobbits = arr.slice(0, 4)
// Também pode ser usado com números negativos referenciar o final do array
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
const sociedade = hobbits.concat(outros, "leru")
console.log(sociedade)
console.log(hobbits)
console.log(outros)

// splice: Permite remover elementos em qualquer posição do array e substituir por novos
const elementosRemovidos = sociedade.splice(indice, 1, "gatinho dançando")
console.log(elementosRemovidos)
console.log(sociedade)

// Usando o for para percorrer cada elemento do array
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(`${elemento} se encontra na posição ${indice}`)
  }