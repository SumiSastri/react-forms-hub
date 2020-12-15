import React, { Component } from 'react'

import PostList from './PostList'
import ScrollyBar from '../scrolling/ScrollyBar'
import SearchFilter from '../filters/SearchFilter'
import SelectFilter from '../filters/SearchFilter'
import  {selectFilterOptions}  from '../data/mock-data/ddlOptions'


export class PostIndex extends Component {
    constructor(props) {
        super(props)
        const defaultUserType = selectFilterOptions.userType.options.find((user) => user.value === 'musician');
        this.state = {
            displayPosts: [],
            selectFilterResults: {label:(`filteredOptions:${defaultUserType.label}`), value: defaultUserType.value},
                searchFilterResults: '',
            }
        }

    // call data from url to response set it to state 
    // map over the response object and print list in list component
    // to show each individual post deconstrcut props to be rendered in card 
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((posts) => this.setState({ displayPosts: posts }));
        // .then((posts) => this.setState({}));
        // do not remove checks the loading message works
    }
    // write utility functions - this sets the filter input to the event/ target value
    updateSearchInputs = (key, value) => {
        if (key === 'searchFilterResults' || 'selectFilterResults') {
            this.setState({ error: null, [key]: value }, () => {
                // debug-logs console.log("this is1:", this);
                this.setState({ searchFilterResults: this.state.searchFilterResults,  selectFilterResults: this.state.selectFilterResults });
                // debug-logs console.log("this is2:", this);
            });
        } else { this.setState({ error: null, [key]: value }); }

    }
    // utility function to map through the ddlOptions file 
    selectOptions = (options) => {
        return options.map((option) => {
            return { label:(`filteredOptions:${option.label}`), value: option.value }
        });
    }

    render() {
        // const { displayPosts } = this.state
        // refactor and replace displayPosts with filteredPosts that you can search 
        const { displayPosts, searchFilterResults,   selectFilterResults } = this.state
        // debug logs - console.log("this is3:", this);
        // filter through the response object that has been called and set to state (displayPosts)
        // assign the function to a variable - identify the props to filter through - title & body
        // set both the search field and the returned filtered array to lowercase to match cases
        const filteredPosts = displayPosts.filter((displayPosts) => {
            return displayPosts.body.toLowerCase().includes(searchFilterResults.toLowerCase()) ||
                displayPosts.title.toLowerCase().includes(searchFilterResults.toLowerCase())

        });
        return !displayPosts.length ? (
            <div>
                <h2>Please wait this page is still loading</h2>
            </div>
        ) : (
                <div>
                    <ScrollyBar>
                        <SelectFilter
                            className='inpt-1m'
                            datatestid='ddl-usr-type'
                            label='Select User Type'
                            name='ddl-usr-type'
                            options={this.selectOptions(selectFilterOptions.userType.options)}
                            required={false}
                            type='select'
                            value={selectFilterResults}
                            onChange={event => this.updateSearchInputs(' selectFilterResults', event.target.value)} />


                        {/* Write onChange handler and set to target value */}
                        <SearchFilter
                            className='inpt-1l'
                            datatestid='searchfield-posts'
                            label='Search Posts'
                            name='search-posts'
                            placeholder='Search'
                            required={false}
                            type='search'
                            onChange={event => this.updateSearchInputs('searchFilterResults', event.target.value)} />
                        {/* Replaced displayed posts with the filtered posts */}
                        <PostList displayPosts={filteredPosts} />
                        {/* <PostList displayPosts={displayPosts} />                 */}

                    </ScrollyBar>
                </div>
            )
    }
}

export default PostIndex
