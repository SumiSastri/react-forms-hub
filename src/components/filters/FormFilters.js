import React, { Component } from 'react'

import '../styles/filterStyles.css'

import SelectFilter from './SelectFilter'
import SearchFilter from './SearchFilter'

export class FormFilters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectFilter: '',
            searchFilter: '',
        }
    }
    updateFilterInputs = (key, val) => {
        if (key === 'searchFilter' || key === 'selectFilter') {
            return this.setState({ error: null, [key]: val })
        }
    }
    render() {
        return (
            <div className='filters-container'>
                <section className='filters-container'>
                    <SelectFilter onChange={this.updateFilterInputs} styles={{ margin: '10px' }} />
                    <SearchFilter onChange={this.updateFilterInputs} styles={{ margin: '10px' }} />
                    <button className='button-three'>Save</button>
                </section>
            </div>
        )
    }
}

export default FormFilters
