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

    const getSlotId = (x,y) => {
        return y + (props.rows * x);
    };

    const fillPiece = (column) => {
        const newPieces = [...pieces];
        for (let i = props.rows * props.rows - (props.rows - column); i >= 0; i -= props.rows) {
            if (newPieces[i] === defaultStatus) {
                newPieces[i] = currentPlayer;
                break;
            }
        }

        updatePlayer();

        return setPieces(newPieces);
    };

    const updatePlayer = () => {
        setCurrentPlayer(currentPlayer === playerA ? playerB : playerA);
    }

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
        </div>
    );
}

export default GameBoard;
