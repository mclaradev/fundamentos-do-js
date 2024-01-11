let vaga = []

function listarVagas () {
    alert("Lista de vagas disponíveis:\nÍndice\tNome da vaga\tQuantidade de Inscritos")

    vagas.forEach(function (vaga, indice) {
        alert(`${indice}\t${vaga.nome}\t${vaga.candidatos.length}`)
    })
}

function criarVagas () {
    let nome = prompt("Digite o nome da vaga:")
    let descricao =  prompt("Digite a descrição da vaga:")
    let dataLimite = prompt("Digite a data limite:")

    alert(`Confirme as informações:\nNome: ${nome}\nDescrição: ${descricao}\nData Limite: ${dataLimite}`)

    let confirmacao = prompt("Deseja confirmar a criação da vaga? (Digite 'sim' para confirmar)")

    if (confirmacao.toLowerCase === 'sim') {
        let novaVaga = {
            nome,
            descricao,
            dataLimite,
            candidatos: []
        }

        vagas.push(novaVaga)
        alert("Vaga criada com sucesso!")
    } else {
        alert("Vaga cancelada.")
    }
}

