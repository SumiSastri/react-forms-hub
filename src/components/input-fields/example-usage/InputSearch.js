import React from 'react';

import '../styles/inputStyles.css';
import '../buttons/buttonStyles.css'
import '../styles/filterStyles.css'

export const InputSearch = ({ value, onChange, onSubmit }) => {
    return (
        <div >
            <input
                className='inpt-1l'
                datatestid='inpt-search'
                name='inpt-search'  
                placeholder='search'  
                onChange={onChange}
                onSubmit={onSubmit}
                type="search"
                value={value}
                
                />
        </div>
    );
};
