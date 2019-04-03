import React, {useState} from 'react';

import GameSlot from './GameSlot';
import AddTokens from './AddTokens'
import utils from '../utils'

const GameBoard = props => {

    const defaultStatus = "none";
    const playerA = "playerA";
    const playerB = "playerB";

    const [currentPlayer, setCurrentPlayer] = useState(playerA);
    const [pieces, setPieces] = useState(Array(props.rows * props.rows).fill(defaultStatus));
    const [hasWon, setHasWon] = useState(defaultStatus);

    const getSlotId = (x,y) => {
        return y + (props.rows * x);
    };

    const fillPiece = (column) => {
        if (hasWon === defaultStatus) {
            const newPieces = [...pieces];
            for (let i = props.rows * props.rows - (props.rows - column); i >= 0; i -= props.rows) {
                if (newPieces[i] === defaultStatus) {

                    newPieces[i] = currentPlayer;

                    setPieces(newPieces);

                    if (isWinner(newPieces)) {
                        setHasWon(currentPlayer);
                    }
                    else {
                        updatePlayer();
                    }

                    break;
                }
            }
        }
    };

    const isWinner = (pieces) => {

        const winnerCount = 4;
        let hasWon = false;

        for (let i = 0; i < props.rows * props.rows; i++) {
            const checkPiece = pieces[i];

            // If the piece is a player, let's check it out
            if (checkPiece !== defaultStatus) {

                let checkCounter = 0;

                // check columns from current position
                for (let c = (i + props.rows); c < props.rows * props.rows && hasWon === false; c+=props.rows) {
                    //console.log("For piece [" + i + "] checking [" + c + "]: " + checkCounter);
                    if (checkPiece === pieces[c]) {
                        if (checkCounter <= 0) {
                            checkCounter = 1;
                        }
                        checkCounter++;
                        console.log("Col match", checkCounter, checkPiece);
                        if (checkCounter >= winnerCount) {
                            hasWon = true;
                        }
                    }
                    else {
                        break;
                    }
                }

                checkCounter = 0;
                //Check rows from current position
                if (i % props.rows <= (props.rows - winnerCount)) {
                    for (let r = (i + 1); r < (i + winnerCount) && hasWon === false; r++) {
                        //console.log("For piece [" + i + "] checking [" + r + "]: " + checkCounter);
                        if (checkPiece === pieces[r]) {
                            if (checkCounter <= 0) {
                                checkCounter = 1;
                            }
                            checkCounter++;
                            console.log("Row match", checkCounter, checkPiece);
                            if (checkCounter >= winnerCount) {
                                hasWon = true;
                            }
                        }
                        else {
                            break;
                        }
                    }
                }

                checkCounter = 0;
                // check diagnals

                if (hasWon === true) {
                    console.log("Winner! ", checkPiece);
                    return true;
                }
            }
        }

        return false;
    };

    const updatePlayer = () => {
        setCurrentPlayer(currentPlayer === playerA ? playerB : playerA);
    };

    return (
        <div className="game-board">
            {utils.range(0,props.rows-1).map(slotX => (
                <div className="game-board-row">
                    {utils.range(0,props.rows-1).map(slotY => (
                        <GameSlot
                            key={getSlotId(slotX, slotY)}
                            slotId={getSlotId(slotX, slotY)}
                            status={pieces[getSlotId(slotX, slotY)]}/>
                    ))}
                </div>
            ))}
            <AddTokens rows={props.rows} onClick={fillPiece}/>
            <div>
                {currentPlayer}
            </div>
            <div>
                Won? {hasWon}
            </div>
        </div>
    );
}

export default GameBoard;
