const metros = parseFloat(prompt("Escolha um valor em metros: "))
const opcoes = prompt("Agora escolha uma dessas opções para converter o valor que você escolheu:\na) milímetro (mm)\nb) centímetro (cm)\nc) decímetro(dm)\nd) decâmetro (dam)\ne) hectômetro (hm)\nf) quilômetro (km)")

const mm = metros * 1000
const cm = metros * 100
const dm = metros * 10
const dam = metros / 10
const hm = metros / 100
const km = metros / 1000

switch (opcoes) {
    case "a":
        alert(`${metros} metros convertido para Milímetros fica: ${mm} mm`)
    break
    case "b":
        alert(`${metros} metros convertido para Centímetros fica: ${cm} cm`)
    break
    case "c":
        alert(`${metros} metros convertido para Decímetro fica: ${dm} dm`)
    break
    case "d":
        alert(`${metros} metros convertido para Decâmetro fica: ${dam} dam`)
    break
    case "e":
        alert(`${metros} metros convertido para Hectômetro fica: ${hm} hm`)
    break
    case "f":
        alert(`${metros} metros convertido para Quilômetro fica: ${km} km`)
    break
    default:
        alert("Opção inválida. Escolha do A até o F para obter uma resposta." )
}
