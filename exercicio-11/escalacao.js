function limparForm() {
    document.getElementById('position').value = ''
    document.getElementById('playerName').value = ''
    document.getElementById('playerNumber').value = ''
}

function escalarPlayer() {
    const position = document.getElementById('position').value
    const playerName = document.getElementById('playerName').value
    const playerNumber = document.getElementById('playerNumber').value

    if (position && playerName && playerNumber) {
        let confirmacao = confirm(`Deseja confirmar a escalção do jogador ${playerName} de camisa número ${playerNumber}?`)
        if (confirmacao) {
            const newLi = document.createElement('li')
            newLi.innerText = `Jogador: ${playerName} | Camisa: ${playerNumber} | Posição: ${position}`
            document.getElementById('escalacaoList').appendChild(newLi)
            limparForm()
        }
    }
}