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
            case "4":
                resultado = alert(areaTrapezio())
            break
            case "5":
                resultado = alert(areaCirculo())
            break
            case "6":
                resultado = alert("Ok, saindo...")
            break
        default:
            resultado = alert("Essa opção não existe, tente novamente.")
        break
        }
    } while (opcao !== "6")
}

executar()

/* Resolução do Professor: 

function calcularAreaTriangulo() {
  const base = parseFloat(prompt("Informe a base do triângulo:"))
  const altura = parseFloat(prompt("Informe a altura do triângulo:"))
  return base * altura / 2
}

function calcularAreaRetangulo() {
  const base = parseFloat(prompt("Informe a base do retângulo:"))
  const altura = parseFloat(prompt("Informe a altura do retângulo:"))
  return base * altura
}

function calcularAreaQuadrado() {
  const lado = parseFloat(prompt("Informe a área do quadrado:"))
  return lado * lado
}

function calcularAreaTrapezio() {
  const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
  const altura = parseFloat(prompt("Informe a altura do trapézio:"))
  return (baseMaior + baseMenor) * altura / 2
}

function calcularAreaCirculo() {
  const raio = parseFloat(prompt("Informe o raio do círculo:"))
  return (3.14 * raio * raio)
}

function exibirMenu() {
  return prompt(
    "Calculadora Geométrica\n" +
    "1. Calcular área de triângulo\n" +
    "2. Calcular área de retângulo\n" +
    "3. Calcular área de quadrado\n" +
    "4. Calcular área de trapézio\n" +
    "5. Calcular área de círculo\n" +
    "6. Sair\n"
  )
}

function executar() {
  let opcao = ""

  do {
    opcao = exibirMenu()
    let resultado

    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo()
        break
      case "2":
        resultado = calcularAreaRetangulo()
        break
      case "3":
        resultado = calcularAreaQuadrado()
        break
      case "4":
        resultado = calcularAreaTrapezio()
        break
      case "5":
        resultado = calcularAreaCirculo()
        break
      case "6":
        alert("Saindo...")
        break
      default:
        alert("Opção inválida!")
        break
    }

    if (resultado) {
      alert("Resultado: " + resultado)
    }

  } while (opcao !== "6");
}

executar()

 */