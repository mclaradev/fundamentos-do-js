// resolução

let fila = []
let opcao = ""

do {
    let pacientes = ""
    for (let i = 0; i < fila.length; i++) {
        pacientes += `${(i + 1)}º ${fila[i]}\n`
    }

    opcao = prompt(
        `Pacientes\n${pacientes}\nEscolha uma das três opções abaixo para prosseguir:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair`
    )

    switch (opcao) {
        case "1":
            const novoPaciente = prompt("Digite o nome do paciente:")
            fila.push(novoPaciente)
            break
        case "2":
            const pacienteConsultado = fila.shift()
            if (!pacienteConsultado) {
                alert("Você não tem pacientes no momento.")
            } else {
                alert(`${pacienteConsultado} foi removido da fila.`)
            }
            break
        case "3":
            alert("Você trabalhou bastante hoje. Volte amanhã para continuar!")
            break
        default:
            alert("Opção inválida. tente novamente mais tarde.")
            break
    }

} while (opcao !== "3")


// jeito que eu fiz

/*const lista = ["Maria Clara\n João\n Steph\n"]

while (true) {
    const apresentacao = alert(`bem vindo(a) ao seu consultório, aqui está a lista de espera dos pacientes:\n ${lista}\n`)
    const opcoes = prompt('Escolha uma das 3 opções abaixo para prosseguir:\n1) Novo Paciente\n2) Consultar Paciente\n3) Sair')

    if (opcoes === "1") {
        const nome = prompt("Digite o nome do novo paciente:")
        lista.push(nome)
        alert(`Você adicionou ${nome} na lista de espera, agora a lista está assim:\n${lista}`)
    } else if (opcoes === "2") {
        if (lista.length === 0) {
            alert("Não tem pacientes.")
        } else {
            const pacienteConsultado = lista.shift()
            alert(`Paciente ${pacienteConsultado} foi consultado(a)`)
        }

        } else if (opcoes === "3") {
            alert('Parece que alguém não quer trabalhar hoje. Até mais!')
            break;
    } else {
        alert('Opção Inválida, tente novamente.')
    }
} */