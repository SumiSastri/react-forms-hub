import React, { Component } from 'react'

import SelectFilter from './SelectFilter'
import SearchFilter from './SearchFilter'

export class FormFilters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // data: data,
            selectFilter: '',
            searchFilter: '',
        }

        this.initialState = this.state;
    }
    updateFilterInputs = (key, val) => {
        if (key === 'searchFilter' || key === 'selectFilter') {
            return this.setState({ error: null, [key]: val })
            alert(`option selected: ${this.state.selectFilter} searchQuery: ${this.state.searchFilter} `)
        }
    }
    render() {
        // const searchQuery = this.state.data.filter((data) => {
        //     return data.toLowerCase().includes(this.state.searchFilter.toLowerCase());
        // });
        return (
            <div>
                <SelectFilter onChange={this.updateFilterInputs} />
                <SearchFilter onChange={this.updateFilterInputs} />
            </div>
        )
    }
}

export default FormFilters
