import React, { Component } from 'react'

import PostList from './PostList'
import ScrollyBar from '../scrolling/ScrollyBar'
import SearchFilter from '../filters/SearchFilter'
import SelectFilter from '../filters/SearchFilter'

export class PostIndex extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            displayPosts: [],
            selectFilterOption: '',
            searchFilterResults: '',
        }
        this.updateSearchInputs = this.updateSearchInputs.bind(this);
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
        if (key === 'searchFilterResults' || 'selectFilterOption' ) {
            this.setState({ error: null, [key]: value }, () => {
                // debug-logs console.log("this is1:", this);
                this.setState({ searchFilterResults: this.state.searchFilterResults, seletFilterOption: this.state.selectFilterOption });
                // debug-logs console.log("this is2:", this);
            });
        } else { this.setState({ error: null, [key]: value }); }
        
    }   
    render() {
        // const { displayPosts } = this.state
        // refactor and replace displayPosts with filteredPosts that you can search 
        const { displayPosts, searchFilterResults } = this.state
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
                      {/* Write onChange handler and set to target value */}
                         <SearchFilter 
                         className='inpt-1l'
                         datatestid= 'searchfield-posts'
                         label='Search Posts'
                         name='search-posts'
                         placeholder='Search'
                         required={false}
                         type='search' 
                         onChange={event => this.updateSearchInputs('searchFilterResults', event.target.value)} />  
                                           {/* Replaced displayed posts with the filtered posts */}
                        <PostList displayPosts={filteredPosts} /> 
                        {/* <PostList displayPosts={displayPosts} />                 */}
                        <SelectFilter onChange={event => this.updateSearchInputs('selectFilterOption', event.target.value)} />  
                    </ScrollyBar>
                </div>
            )
    }
}

export default PostIndex
