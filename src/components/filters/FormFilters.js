import React, { Component } from 'react'

import SelectFilter from './SelectFilter'
import SearchFilter from './SearchFilter'

export class FormFilters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // cakeData: cakeData,
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
        // const filteredCakeData = this.state.cakeData.filter((cakeName) => {
        //     return cakeName.toLowerCase().includes(this.state.searchFilter.toLowerCase());
        // });
        // const outputCakeList = this.state.cakeData.map((cakeItem) =>{ return <Cake cake={cakeItem} key={cake.id}})
        // const cakeOptions = this.state.cakeList.map((selectedCake) => { return <Select cake={selecteedCake}})
        return (
            <div>
                <SelectFilter onChange={this.updateFilterInputs} />
                <SearchFilter onChange={this.updateFilterInputs} />
            </div>
        )
    }
}

export default FormFilters
