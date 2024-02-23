import PropTypes from 'prop-types'
import { Square } from './Square'

export const ModalWinner = ({winner, resetGame}) => {

    if (winner === null) return null

    const textWinner = winner === '' ? 'Empate' : 'Ganó'

    return (
        <div className="bg-slate-950/90 overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-slate-900 rounded-lg shadow">
                    <div className="p-4 md:p-5 text-center flex flex-col items-center gap-8">
                        <h1 className='text-4xl font-semibold text-white'>¡{textWinner}!</h1>
                        {
                            winner && <Square turn={winner} updateBoard={() => {}} />
                        }
                        <button onClick={resetGame} type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            Nueva partida
                        </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

ModalWinner.propTypes = {
    winner: PropTypes.string,
    resetGame: PropTypes.func
}
