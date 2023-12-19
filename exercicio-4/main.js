const nome = prompt("Digite seu nome:")
let cidades = ""
let contagem = 0

let pergunta = prompt("Já visitou alguma cidade?\nSim\nNão")

while (pergunta === "Sim"

) {
    let nomeDaCidade = prompt("Digite o nome da cidade que você visitou:")
    cidades += ` - ${nomeDaCidade}\n`
    contagem++
    pergunta = prompt("Já visitou alguma outra cidade?\nSim\nNão")
}

alert(`Turista: ${nome}\n
Quantidade de cidades visitadas: ${contagem}\n
Cidades Visitadas: \n${cidades}`)