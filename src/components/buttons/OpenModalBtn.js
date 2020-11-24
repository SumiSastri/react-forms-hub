import React from 'react'

const OpenModalBtn = ({ openModal }) => {
    return (
        <div>
            <button className='.button-two span' data-testid='btn-opn-modal' name='btn-opn-modal' type='click' onClick={openModal} >
                Click to open
        </button>
        </div>
    )
}

export default OpenModalBtn


