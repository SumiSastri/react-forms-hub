import React from 'react';

import '../styles/inputStyles.css';
import '../buttons/buttonStyles.css'
import '../styles/filterStyles.css'

import {InputField} from '../input-fields/InputField'

const SearchFilter = ({ updateSearchInputs }) => {
    return (
        <div >
            <section className='filters-container'>
                <InputField  
                 className='inpt-2l'
                 datatestid= 'search-filter'
                 name='Search Filter Field'
                 onChange={updateSearchInputs}
                 placeholder='Search'
                 type='search'                    
                />
                </section>

        </div>
    );
};
export default SearchFilter;
