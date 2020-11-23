import React from 'react';
import '../input-fields/input.css';


const SearchFilter = ({ searchFilter, updateFilterInputs }) => {
    return (
        <div>
            <label>Search</label>
            <input
                className='input-field-two'
                data-testid='inpt-search'
                name='search-filter'
                onChange={updateFilterInputs}
                placeholder='search'  
                type="search"
                value={searchFilter}    
            />
        </div>
    );
};
export default SearchFilter;
