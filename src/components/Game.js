import React from 'react';

import GameBoard from './GameBoard';

const Game = props => {

    return (
      <div className="connect-four-container">
        <h1>Connect Four</h1>
        <GameBoard />
      </div>
    );
}

export default Game;
