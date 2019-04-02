import React from 'react'

import utils from '../utils'

const AddTokens = props => {

    return (
        <>
            {utils.range(0, props.rows-1).map(tokenId => (
                <div className="token-container">
                <button
                    key={tokenId}
                    onClick={() => props.onClick(tokenId)}
                    >
                    Add {tokenId}
                </button>
                </div>
            ))}
        </>
    );
}

export default AddTokens;
