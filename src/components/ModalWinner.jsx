import PropTypes from 'prop-types'

export const ModalWinner = ({winner, resetGame}) => {

    if (winner === null) return null

    const textWinner = winner === false ? 'Empate' : 'Ganó'

    return (
        <div className="bg-slate-950/90 overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-slate-900 rounded-lg shadow">
                    <div className="p-4 md:p-5 text-center">
                        <svg className="mx-auto mb-4 text-white w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"/>
                        </svg>

                        <h3 className="mb-5 text-lg font-normal text-white">¡{textWinner + ' ' + winner}!</h3>
                        <button onClick={resetGame} data-modal-hide="popup-modal" type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
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
