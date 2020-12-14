import React from 'react';

import '../styles/inputStyles.css';
import '../buttons/buttonStyles.css'
import '../styles/filterStyles.css'

import {InputField} from '../input-fields/InputField'

// onChange deconstructed from PostIndex as a prop of the Input Field
const SearchFilter = ({ onChange }) => {
    return (
        <div >
            <section className='filters-container'>
           <InputField
                 className='inpt-2l'
                 datatestid= 'search-filter'
                 name='Search Filter Field'
                 onChange={onChange}
                 placeholder='Search'
                 type='search'               
                />
                </section>

        </div>
    );
};
export default SearchFilter;
