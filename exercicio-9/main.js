function areaTriangulo() {
    const base = parseFloat(prompt("Digite o número da base:"))
    const altura = parseFloat(prompt("Digite o número da altura:"))
    return base * altura / 2
}

function areaRetangulo() {
    const base = parseFloat(prompt("Digite o número da base:"))
    const altura = parseFloat(prompt("Digite o número da altura:"))
    return base * altura
}

function areaQuadrado() {
    const lado = parseFloat(prompt("Digite o número do lado:"))
    return lado ** 2
}

function areaTrapezio() {
    const baseMaior = parseFloat(prompt("DIgite o número da base maior:"))
    const baseMenor = parseFloat(prompt("Digite o número da base menor:"))
    const altura = parseFloat(prompt("Digite o número da altura:"))
    return (baseMaior + baseMenor) * altura / 2
}

function areaCirculo() {
    const raio = parseFloat(prompt("Digite o número do raio:"))
    return 3.14 * (raio ** 2)
}

function menu() {
    return prompt("Bem vind@ a calculadora geométrica. Escolha uma das opções abaixo para começarmos:\n1. Área do Triângulo\n2. Área do Retângulo\n3. Área do Quadrado\n4. Área do Trapézio\n5. Área do Círculo\n6. Sair")
}