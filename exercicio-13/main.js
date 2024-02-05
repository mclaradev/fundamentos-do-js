const boardRegions =document.querySelectorAll('#gameBoard span')
let vBoard = []
let turnPlayer = ''

function updateTitle() {
    const playerInput = document.getElementById(turnPlayer)
    document.getElementById('turnPlayer').innerText = playerInput.value
}

function initializeGame() {
    vBoard = [['', '', ''], ['', '', ''], ['', '', '']]
    turnPlayer = 'player1'
    document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>'
    updateTitle()
    boardRegions.forEach(function (elemet) {
        elemet.classList.remove('win')
        elemet.innerText = ''
        elemet.addEventListener('click', handBoardClick)
    })
}

function disableRegion(element) {
    element.style.cursor ='default'
    element.removeEventListener('click', handBoardClick)
}

function handBoardClick(ev) {
    const span = ev.currentTarget
    const region = span.dataset.region
    const rowColumnPair = region.split('.')
    const row = rowColumnPair[0]
    const column = rowColumnPair[1]

    if (turnPlayer === 'player1') {
        span.innerText = 'X'
        vBoard[row] [column] = 'X'
    } else {
        span.innerText = 'O'
        vBoard[row] [column] = 'O'
    }
    console.clear()
    console.table(vBoard)
    disableRegion(span)
}

document.getElementById('start').addEventListener('click', initializeGame)