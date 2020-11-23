import React from 'react';
import './input.css';


const SearchFilter = properties => {
    return (
        <div>
            <label>Text:</label>
            <input
                className='i'
                data-testid=''
                placeholder='search'
                name=''
                onChange={() => { }}
            />
        </div>
    );
};
export default SearchFilter;