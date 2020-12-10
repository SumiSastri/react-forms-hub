import React from 'react';

import '../styles/inputStyles.css';
import '../buttons/buttonStyles.css'
import '../styles/filterStyles.css'

import {InputSearch} from '../input-fields/InputSearch'

const SearchFilter = ({ searchFilter, updateFilterInputs }) => {
    return (
        <div >
            <section className='filters-container'>
                <InputSearch   onChange={updateFilterInputs} value={searchFilter}/>
                </section>

        </div>
    );
};
export default SearchFilter;
