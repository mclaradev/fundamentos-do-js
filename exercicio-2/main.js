const carro1 = prompt("Dê um nome para o primeiro carro: ")
const velocidade1 = parseFloat(prompt(`agora digite a velocidade do carro ${carro1}:`))

const carro2 = prompt("Agora dê um nome para o segundo carro: ")
const velocidade2 = parseFloat(prompt(`Agora digite a velocidade do carro ${carro2}:`))

if (velocidade1 > velocidade2) {
    alert(`${carro1} está mais rápido que o ${carro2}`)
} else if (velocidade2 > velocidade1) {
    alert(`${carro2} está mais rápido que o ${carro1}`)
} else {
    alert(`${carro1} e ${carro2} estão com a velocidade igual.`)
}