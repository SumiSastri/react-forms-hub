import React from 'react'

export default function ModalCloseBtn({ label, openModal }) {
    return (
        <div>
            <button type='click' onClick={openModal(false)}>
                {label}
            </button>
        </div>
    )
}