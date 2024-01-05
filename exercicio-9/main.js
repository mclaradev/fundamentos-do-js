// Como eu fiz:

function areaTriangulo() {
    const base = parseFloat(prompt("Digite o número da base:"))
    const altura = parseFloat(prompt("Digite o número da altura:"))
    return `A área do Triângulo é igual a: ${base * altura / 2}`
}

function areaRetangulo() {
    const base = parseFloat(prompt("Digite o número da base:"))
    const altura = parseFloat(prompt("Digite o número da altura:"))
    return `A área do Retângulo é igual a: ${base * altura}`
}

function areaQuadrado() {
    const lado = parseFloat(prompt("Digite o número do lado:"))
    return `A área do Quadrado é igual a: ${lado ** 2}`
}

function areaTrapezio() {
    const baseMaior = parseFloat(prompt("DIgite o número da base maior:"))
    const baseMenor = parseFloat(prompt("Digite o número da base menor:"))
    const altura = parseFloat(prompt("Digite o número da altura:"))
    return `A área do Trapézio é igual a: ${(baseMaior + baseMenor) * altura / 2}`
}

function areaCirculo() {
    const raio = parseFloat(prompt("Digite o número do raio:"))
    return `A área do Círculo é igual a: ${3.14 * (raio ** 2)}`
}

function menu() {
    return prompt("Bem vind@ a calculadora geométrica. Escolha uma das opções abaixo para começarmos:\n1. Área do Triângulo\n2. Área do Retângulo\n3. Área do Quadrado\n4. Área do Trapézio\n5. Área do Círculo\n6. Sair")
}

function executar() {
    let opcao = ""

    do {
        opcao = menu()
        let resultado

        switch (opcao) {
            case "1":
                resultado = alert(areaTriangulo())
            break
            case "2":
                resultado = alert(areaRetangulo())
            break
            case "3":
                resultado = alert(areaQuadrado())
            break
        default:
            resultado = alert("Essa opção não existe, tente novamente.")
        break
        }
    } while (opcao !== "6")
}

executar()