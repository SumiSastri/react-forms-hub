import React, { Component } from 'react'

import PostList from './PostList'
import ScrollyBar from '../scrolling/ScrollyBar'
import SearchFilter from '../filters/SearchFilter'

export class PostIndex extends Component {
    constructor(props) {
        super(props)

        this.state = {
            displayPosts: [],
            selectFilter: '',
            searchFilter: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((posts) => this.setState({ displayPosts: posts }));
        // .then((posts) => this.setState({}));
        // do not remove checks the loading message works
    }
    updateFilterInputs = (key, val) => {
        if (key === 'searchFilter' || key === 'selectFilter') {
            return this.setState({ error: null, [key]: val })
        }
    }

    render() {
        const { displayPosts } = this.state
        return !displayPosts.length ? (
            <div>
                <h2>Please wait this page is still loading</h2>
            </div>
        ) : (
                <div>                 
                  <ScrollyBar>
                    <SearchFilter onChange={this.updateFilterInputs} styles={{ margin: '10px' }} />
                        <PostList displayPosts={displayPosts} />
                    </ScrollyBar>

                </div>
            )
    }
}

export default PostIndex
