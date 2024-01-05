function areaTriangulo() {
    const base = parseFloat(prompt("Digite o número da base:"))
    const altura = parseFloat(prompt("Digite o número da altura:"))
    const resultado = base * altura / 2
    alert(`A área do Triângulo é igual a: ${resultado}`)
}

areaTriangulo()

function areaRetangulo() {
    const base = parseFloat(prompt("Digite o número da base:"))
    const altura = parseFloat(prompt("Digite o número da altura:"))
    const resultado = base * altura
    alert(`A área do Retângulo é igual a: ${resultado}`)
}

areaRetangulo()

function areaQuadrado() {
    const lado = parseFloat(prompt("Digite o número do lado:"))
    const resultado = lado ** 2
    alert(`A área do Quadrado é igual a: ${resultado}`)
}

areaQuadrado()

function areaTrapezio() {
    const baseMaior = parseFloat(prompt("DIgite o número da base maior:"))
    const baseMenor = parseFloat(prompt("Digite o número da base menor:"))
    const altura = parseFloat(prompt("Digite o número da altura:"))
    const resultado = (baseMaior + baseMenor) * altura / 2
    alert(`A área do Trapézio é igual a: ${resultado}`)
}

areaTrapezio()

function areaCirculo() {
    const raio = parseFloat(prompt("Digite o número do raio:"))
    const resultado = 3.14 * (raio ** 2)
    alert(`A área do Círculo é igual a: ${resultado}`)
}

areaCirculo()