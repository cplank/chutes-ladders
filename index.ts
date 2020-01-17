import { Gameboard, Player, SpecialCell } from "./classes"

type TGame = {
    numberOfPlayers: number
    playerOptions: Array<string>

}

let playerOptions: ["kitty", "birb", "turtle", "doggo", "badgermole", "lil fish"]

let gamePlay = {
    players: [],
    gameBoard: new Gameboard,
    currentPlayer: null,

}


function startGame() {
    gamePlay.currentPlayer = 0
}

function pickAnimal(animal) {
    let player = new Player(animal)
    gamePlay.players.push(player)
}

function nextTurn() {
    if (gamePlay.currentPlayer === gamePlay.players.length) {
        gamePlay.currentPlayer = 0
    } else {
        gamePlay.currentPlayer++
    }
}

function rollTheDie() {
    let result = 1 + Math.floor(Math.random() * 6)
    return result
}

function checkWin(player: Player, dieResult) {
    if (player.currentLocation + dieResult > 100) {
        return true
    }
    return false
}

function playerTurn(player: Player) {
    let result = rollTheDie()
    let win = checkWin(player, result)
    if (win) {
        return true
    } else {
        let futureSpotIndex = player.currentLocation + result
        let futureSpot = gamePlay.gameBoard.getAt(futureSpotIndex)
        let futureCell = futureSpot.data;
        if (futureCell instanceof SpecialCell) {
            player.currentLocation = futureCell.specialMoves.data.spaceNumber
        } else {
            player.currentLocation = futureCell.spaceNumber
        }
    }
    nextTurn()
}