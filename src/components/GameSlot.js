import React from 'react';

import utils from '../utils';

const GameSlot = props => {

    return (
      <div
          key={props.slotId}
          className="game-slot"
          style={{ backgroundColor: utils.colors[props.status] }}
          >
          {props.slotId}
      </div>
    );
}


export default GameSlot;
