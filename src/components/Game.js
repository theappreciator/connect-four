import React from 'react';

import GameBoard from './GameBoard';
import utils from "../utils";

const Game = props => {


    const rows = 6;




    return (
      <div className="game-container">
        <h1>Connect Four</h1>
        <GameBoard key="1" rows={rows}/>
      </div>
    );
}

export default Game;
