import PropTypes from 'prop-types'

export const Square = ({turn, updateBoard, index, isSelected}) => {

    const handleClick = () => {
        updateBoard(index)
    }

    return (
        <div onClick={handleClick} className={"h-24 w-24 cursor-pointer flex justify-center items-center border-2 rounded-2xl border-cyan-600 p-2 text-cyan-600 text-4xl" + (isSelected ? " bg-sky-400" : "")}>
            {turn}
        </div>
  )
}

Square.propTypes = {
    turn: PropTypes.string,
    updateBoard: PropTypes.func,
    index: PropTypes.number,
    isSelected: PropTypes.bool
}
