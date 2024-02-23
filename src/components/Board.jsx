import { useState } from "react"
import { Square } from "./Square"
import PropTypes from 'prop-types'
import { TURNS } from "../utils/constants"
import { checkEndGame, checkWinner } from "../utils/logic"
import { ModalWinner } from "./ModalWinner"
import confetti from "canvas-confetti"

export const Board = ({initialBoard}) => {
  
    const [turn, setTurn] = useState(TURNS.X)
    const [board, setBoard] = useState(initialBoard)
    const [winner, setWinner] = useState(null)
  
    const updateBoard = (index) => {
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        const newBoard = [...board]

        newBoard[index] = turn
        setBoard(newBoard)
        setTurn(newTurn)

        const newWinner = checkWinner(newBoard)

        if(newWinner) {
            setWinner(newWinner)
            confetti({particleCount: 100, spread: 70, origin: { y: 0.6 }})
        }else{
            if(checkEndGame(newBoard)) setWinner('')
        }
    }

    const resetGame = () => {
        setTurn(TURNS.X)
        setBoard(initialBoard)
        setWinner(null)
    }

    return (
        <section className="min-h-screen flex flex-col gap-4 justify-center items-center">
            <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
                Michi App
            </h1>
            <section className="grid place-content-center [grid-template-columns:repeat(3,6rem)] [grid-template-rows:repeat(3,6rem)] gap-1">
                {
                    board.map((item, index) => (
                        <Square key={index} turn={item} updateBoard={updateBoard} index={index} />
                    ))
                }
            </section>
            <div className="flex gap-2">
                <Square turn={TURNS.X} isSelected={turn===TURNS.X} updateBoard={() => {}}/>
                <Square turn={TURNS.O} isSelected={turn===TURNS.O} updateBoard={() => {}}/>
            </div>
            <ModalWinner winner={winner} resetGame={resetGame} />
        </section>
  )
}

Board.propTypes = {
    initialBoard: PropTypes.array,
}
