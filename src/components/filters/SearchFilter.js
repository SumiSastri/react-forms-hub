import React from 'react';

import '../styles/inputStyles.css';
import '../buttons/buttonStyles.css'
import '../styles/filterStyles.css'

import {InputField} from '../input-fields/InputField'

const SearchFilter = ({ searchFilter, updateFilterInputs }) => {
    return (
        <div >
            <section className='filters-container'>
                <InputField   onChange={updateFilterInputs} value={searchFilter}/>
                </section>

        </div>
    );
};
export default SearchFilter;
