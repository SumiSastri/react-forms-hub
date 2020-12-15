import React, { Component } from 'react'

import PostList from './PostList'
import ScrollyBar from '../scrolling/ScrollyBar'
import SearchFilter from '../filters/SearchFilter'
import SelectFilter from '../filters/SearchFilter'
import {userTypeOptions} from "../data/mock-data/selectFilterDataOptions"

export class PostIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayPosts: [],
            user: '',
            searchFilterResults: '',
            }
        }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((posts) => this.setState({ displayPosts: posts }));
        // .then((posts) => this.setState({}));
        // do not remove checks the loading message works
    }
 
    updateSearchInputs = (key, value) => {
        if (key === 'searchFilterResults' || 'user') {
            this.setState({ error: null, [key]: value }, () => {
                //console.log("this noErrorState:", this);
                this.setState({ searchFilterResults: this.state.searchFilterResults, user: this.state.user });
                // console.log("this updatedFilter/UserState:", this);
            });
        } else { this.setState({ error: null, [key]: value }); }

    }

    handleDropdownChange = (user) => {
        this.setState({user:user});
        //  console.log("this userState:", this);       
    };
  
    render() {
        // const { displayPosts } = this.state
        // refactor and replace displayPosts with filteredPosts that you can search 
        const { displayPosts, searchFilterResults, user } = this.state
        //  console.log("this renderState:", this);
       
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
                            defaultValue='default'
                            data={userTypeOptions}
                            datatestid='ddl-usr-type'
                            label='Select User Type'
                            name='ddl-usr-type'
                            placeholder='Select User'
                            required={false}
                            type='select'
                            value={user}
                            onChange={event => this.updateSearchInputs('user', event.target.value)}                   
                            />

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