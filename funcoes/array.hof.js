const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// Map: permite obter um novo array a partir de um array existenste
// tradicional:

// const nomes = []
// for (let i = 0; i < personagens.length; i++) {
//     const personagem = personagens[i]
//     nomes.push(personagem.nome)
// }
// 
// console.log(nomes)

// funcional:

const nomes = personagens.map(function (personagem) {
    return personagem.nome
})

console.log(nomes)

// filter: permite obter um novo array contendo apenas elementos específicos de um array existente
// tradicional:

// const orcs = []
// for (let i = 0; i < personagens.length; i++) {
//     const personagem = personagens[i]
//     if (personagem.raca === "Orc") {
//         orcs.push(personagem)
//     }
// }
// 
// console.log(orcs)