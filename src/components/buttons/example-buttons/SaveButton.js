import React from 'react'
import PropTypes from 'prop-types'

import '../styles/buttonStyles.css';

export const  ButtonComponent = ({ className, disabled, datatestid, label, name, openModal, onClick, onSubmit, onSave, required, type, value }) => {
    return (
        <div>
            <button
                className={className}
                datatestid={datatestid}
                disabled={disabled}
                label={label}
                name={name}
                openModal={openModal}
                onClick={onClick}
                onSave={onSave}
                onSubmit={onSubmit}
                required={required}
                type={type}
                value={value}
    >{label}</button>
        </div>
    )
}

ButtonComponent.propTypes = {
    className: PropTypes.string,
    datatestid: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    openModal: PropTypes.bool,
    onClick: PropTypes.func,
    onSave: PropTypes.func,
    onSubmit: PropTypes.func,
    required: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.string
}