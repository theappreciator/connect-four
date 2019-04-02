import React from 'react';

import GameSlot from './GameSlot';

const GameBoard = props => {

    return (
      <div className="game-board">
          <GameSlot />
          <GameSlot />
          <GameSlot />
          <GameSlot />

          {}
      </div>
    );
}

export default GameBoard;
