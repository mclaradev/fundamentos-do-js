// como eu fiz:

function limparForm() {
    document.getElementById('position').value = ''
    document.getElementById('playerName').value = ''
    document.getElementById('playerNumber').value = ''
}

function limparFormDelete() {
    document.getElementById('removePlayer').value = ''
}

function escalarPlayer() {
    const position = document.getElementById('position').value
    const playerName = document.getElementById('playerName').value
    const playerNumber = document.getElementById('playerNumber').value

    const confirmacao = confirm(`Deseja confirmar a escalação do jogador ${playerName} de camisa número ${playerNumber} como ${position}?`)

    if (confirmacao) {
        const ul = document.getElementById('escalacaoList')
        const li = document.createElement('li')
        li.id = `player-${playerNumber}`
        li.innerHTML = `<strong>Jogador: ${playerName}<br>Posição: ${position}<br>Número da camisa: ${playerNumber}`
        ul.appendChild(li)
        limparForm()
    }
}

function removerPlayer() {
    const removePlayer = document.getElementById('removePlayer').value
    const playerToRemove = document.getElementById(`player-${removePlayer}`)

    const confirmacao = confirm(`Deseja remover o jogador de camisa número ${removePlayer}?`)
    
    if (confirmacao) {
        document.getElementById('escalacaoList').removeChild(playerToRemove)
        limparFormDelete()
    }
}