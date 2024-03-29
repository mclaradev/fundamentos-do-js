let vaga = []

function listarVagas() {
    alert("Lista de vagas disponíveis:\nÍndice\tNome da vaga\tQuantidade de Inscritos")

    vagas.forEach(function (vaga, indice) {
        alert(`${indice}\t${vaga.nome}\t${vaga.candidatos.length}`)
    })
}

function criarVagas() {
    let nome = prompt("Digite o nome da vaga:")
    let descricao = prompt("Digite a descrição da vaga:")
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

function visualizarVagas() {
    listarVagas()

    let indiceVaga = parseInt(prompt("Digite o índice da vaga que deseja visualizar:"))

    if (isNaN(indiceVaga) || indiceVaga < 0 || indiceVaga >= vagas.length) {
        alert("Índice inválido.")
    }

    let vaga = vagas[indiceVaga]
    alert(`Informações da vaga:\nÍndice: ${indiceVaga}\nNome: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData Limite: ${vaga.dataLimite}\nQuantidade de Candidatos: ${vaga.candidatos.length}`)

    if (vaga.candidatos.length > 0) {
        vaga.candidatos.forEach(function (candidato, index) {
            alert(`Candidatos Inscritos: ${index + 1}. ${candidato}`)
        })
    }

    alert("")
}

function inscreverCandidato() {
    listarVagas()

    let indiceVaga = parseInt(prompt("Digie o índice da vaga em que deseja inscrever o candidato:"))

    if (isNaN(indiceVaga) || indiceVaga < 0 || indiceVaga >= vagas.length) {
        alert("Índice inválido.")
    }

    let vaga = vagas[indiceVaga]
    alert(`Informações da vaga:\nÍndice: ${indiceVaga}\nNome: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData Limite: ${vaga.dataLimite}`)

    let nomeCandidato = prompt("Digite o nome do candidato:")

    alert(`Confirma as informações:\nVaga: ${vaga.nome}\nCandidato: ${nomeCandidato}`)

    let confirmacao = prompt("Deseja confirmar a inscrição do candidato? (Digite 'sim' para confirmar.)")

    if (confirmacao.toLowerCase() === 'sim') {
        vaga.candidatos.push(nomeCandidato)
        alert("Candidato inscrito com sucesso!")
    } else {
        alert("Inscrição cancelada.")
    }
}

function excluirVaga() {
    listarVagas()

    let indiceVaga = parseInt(prompt("Digite o índice da vaga que deseja excluir:"))

    if (isNaN(indiceVaga) || indiceVaga < 0 || indiceVaga >= vagas.length) {
        alert("Índice inválido.")
    }

    let vaga = vagas[indiceVaga]
    alert(`Informações da vaga:\nÍndice: ${indiceVaga}\nNome:
${vaga.nome}\nDescrição: ${vaga.descricao}\nData Limite: 
${vaga.dataLimite}\nQuantidade de Candidatos: 
${vaga.candidatos.length}`)

    let confirmacao = prompt("Deseja confirmar a exclusão da vaga? (Digite 'sim' para confirmar.)")

    if (confirmacao.toLowerCase() === 'sim') {
        vagas.splice(indiceVaga, 1)
        alert("Vaga Excluída com sucesso!")
    } else {
        alert("Exclusão da vaga cancelada.")
    }
}