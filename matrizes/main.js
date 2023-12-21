// arrays podem receber qualquer tipo de dados, inclusive outros arrays.
const arr = [
    "fase 1",
    ["fase 2", 20, true],
    [["fase 3", true, "Olá, Mundo"],
    ["fase 4", true, "Oi, Mundo"],
    ["fase 5", false, "Opa mundo!"]],
    []
]

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])

console.log("--------------------")

console.log(arr[1][0])
console.log(arr[1][1])
console.log(arr[1][2])
console.log(arr[2][0])
console.log(arr[2][0][0])
console.log(arr[2][0][1])
console.log(arr[2][0][2])
console.log(arr[2][1][0])
console.log(arr[2][1][1])
console.log(arr[2][1][2])
console.log(arr[2][2][0])
console.log(arr[2][2][1])
console.log(arr[2][2][2])
console.log(arr[3])

console.log("--------------------")

// podemos ver claramente a estrutura de uma matriz em uma tabela
const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
  ]

console.table(matriz)
matriz.push("nova linha eu acho")
console.table(matriz)
matriz[0].push("nova coluna eu acho")
console.table(matriz)

console.log("--------------------")

// podemos usar vários níveis de laços FOR para iterar facilmente pela matriz
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      const elemento = matriz[i][j]
      console.log(`posição: ( ${i}, ${j} ) Valor: ${elemento}`)
    }
  }