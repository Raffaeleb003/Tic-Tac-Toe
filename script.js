const gameBoard = document.getElementById('gameboard')
const info = document.getElementById('info')

const startCells = [
    '', '', '', '', '', '', '', '', '',
]

function createBoard() {
    startCells.forEach((cell, index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        gameBoard.append(cellElement)
    })
}

createBoard()