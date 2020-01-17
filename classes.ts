import { LinkedList, llNode } from "./linkedList"

export class Gameboard extends LinkedList<Cell> {

    constructor() {
        super()
        this.insertFirst(new Cell(0));

        for (let i = 1; i <= 100; i++) {
            this.insertLast(new Cell(i))
        }

        this.getAt(1).data = new SpecialCell(1, this.getAt(38))
        this.getAt(4).data = new SpecialCell(4, this.getAt(14))
        this.getAt(8).data = new SpecialCell(8, this.getAt(10))
        this.getAt(28).data = new SpecialCell(28, this.getAt(76))
        this.getAt(21).data = new SpecialCell(21, this.getAt(42))
        this.getAt(50).data = new SpecialCell(50, this.getAt(67))
        this.getAt(71).data = new SpecialCell(71, this.getAt(92))
        this.getAt(80).data = new SpecialCell(80, this.getAt(99))
        this.getAt(97).data = new SpecialCell(97, this.getAt(78))
        this.getAt(95).data = new SpecialCell(95, this.getAt(56))
        this.getAt(88).data = new SpecialCell(88, this.getAt(24))
        this.getAt(62).data = new SpecialCell(62, this.getAt(18))
        this.getAt(48).data = new SpecialCell(48, this.getAt(26))
        this.getAt(36).data = new SpecialCell(36, this.getAt(6))
        this.getAt(32).data = new SpecialCell(32, this.getAt(10))
    }
}

export class Cell {
    spaceNumber: number

    constructor(
        spaceNumber: number
    ) {
        this.spaceNumber = spaceNumber
    }
}

export class SpecialCell extends Cell {
    specialMoves: llNode<Cell>

    constructor(spaceNumber: number, specialMoves: llNode<Cell>) {
        super(spaceNumber)
        this.specialMoves = specialMoves
    }
}


export class Player {
    token: string
    currentLocation: number
    constructor(token: string) {
        this.token = token
        this.currentLocation = 0
    }
}