import { useState } from "react"
import { Square } from "./Square"
import PropTypes from 'prop-types'

export const Board = ({initialBoard}) => {
  
    const TURNS = {X: '✖️', O: '⭕'}
    
    const [turn, setTurn] = useState(TURNS.X)
    const [board, setBoard] = useState(initialBoard); 
  

    const updateBoard = (index) => {
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        const newBoard = [...board]

        newBoard[index] = turn
        setBoard(newBoard)
        setTurn(newTurn)

    }

    return (
        <>
            <section className="grid place-content-center [grid-template-columns:repeat(3,6rem)] [grid-template-rows:repeat(3,6rem)] gap-2">
                {
                    board.map((item, index) => (
                        <Square key={index} turn={item} updateBoard={updateBoard} index={index} />
                    ))
                }
            </section>
            <div className="flex gap-2">
                <Square turn={TURNS.X} isSelected={turn===TURNS.X}/>
                <Square turn={TURNS.O} isSelected={turn===TURNS.O}/>
            </div>
        </>
  )
}

Board.propTypes = {
    initialBoard: PropTypes.array,
}