import React from 'react';
import { FaSearch } from 'react-icons/fa'
import '../input-fields/inputStyles.css';
import './filterStyles.css'

import SaveBtn from '../buttons/SaveBtn'


const SearchFilter = ({ searchFilter, updateFilterInputs }) => {
    return (
        <div className='filters-container'>
            <label className='filters-container'>Search<FaSearch color='grey' size='1rem' /></label>
            <input
                className='input-field-two'
                data-testid='inpt-search'
                name='search-filter'
                onChange={updateFilterInputs}
                placeholder='search'  
                type="search"
                value={searchFilter}
            />
            <section>
                <SaveBtn />
            </section>
        </div>
    );
};
export default SearchFilter;
