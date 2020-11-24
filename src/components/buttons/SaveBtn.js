import React, { Component } from 'react'
import './buttonStyles.css'

export class SaveBtn extends Component {
    render() {
        return (
            <div>
                <button className='button-two' data-testid='btn-save' name='btn-save' type='click' onClick={() => { }}>
                    Save
        </button>
            </div>
        )
    }
}

export default SaveBtn





