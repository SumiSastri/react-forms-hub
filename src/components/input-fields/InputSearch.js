import React from 'react';

import '../styles/inputStyles.css';
import '../buttons/buttonStyles.css'
import '../styles/filterStyles.css'

export const InputSearch = () => {
    return (
        <div >
            <input
                className='inpt-1l'
                data-testid='inpt-search'
                name='inpt-search'  
                placeholder='search'  
                type="search"
                />
        </div>
    );
};
