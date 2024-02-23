import { WINNERS_COLLECTION } from "./constants";

export const checkWinner = (boardToCheck) => {
    
    for (const combo of WINNERS_COLLECTION) {
        const [a, b, c] = combo
        if (boardToCheck[a] && 
            boardToCheck[a] === boardToCheck[b] && 
            boardToCheck[a] === boardToCheck[c])
            return boardToCheck[a]
    }
    
    return null;
}

export const checkEndGame = (boardCheck) => {
    return boardCheck.every((item) => item !== null)
}