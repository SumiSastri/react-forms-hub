import React, { Component } from 'react'

import PostList from './PostList'
import ScrollyBar from '../scrolling/ScrollyBar'
import SearchFilter from '../filters/SearchFilter'

export class PostIndex extends Component {
    constructor(props) {
        super(props)

        this.state = {
            displayPosts: [],
            selectFilterResults: '',
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
        if (key === 'searchFilterResults' || 'selectFilterResults' ) {
            this.setState({ error: null, [key]: value }, () => {
                this.setState({ searchFilterResults: this.state.searchFilterResults, selectFilterResults: this.state.selectFilterResults });
            });
        } else { this.setState({ error: null, [key]: value }); }
    }

    render() {
        const { displayPosts, searchFilterResults } = this.state
        // filter through the response object that has been called and set to state (displayPosts)
        // assign thge function to a variable - identify the props to filter through - title & body
        // set both the search field and the returned filtered array to lowercase to match cases
		const filteredPosts = displayPosts.filter((displayPosts) => {
            return displayPosts.body.toLowerCase().includes(searchFilterResults.toLowerCase());

		});
        return !displayPosts.length ? (
			<div>
				<h2>Please wait this page is still loading</h2>
			</div>
		) : (
                <div>                 
                  <ScrollyBar>
                         <SearchFilter onChange={this.updateSearchInputs} />
                        {/* <PostList displayPosts={displayPosts} />  */}
                        <PostList displayPosts={filteredPosts} />                
                    </ScrollyBar>
                </div>
            )
    }
}

export default PostIndex
