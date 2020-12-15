import React, { Component } from 'react'

import PostList from './PostList'
import ScrollyBar from '../scrolling/ScrollyBar'
import SearchFilter from '../filters/SearchFilter'
import SelectFilter from '../filters/SearchFilter'
import {userTypeOptions} from "../data/mock-data/selectFilterDataOptions"
// import {selectFilterOptions} from "../data/mock-data/ddlOptions"

export class PostIndex extends Component {
    constructor(props) {
        super(props)
     
        // const defaultUserType = selectFilterOptions.userType.options.find((item) => item.value === 'musician');
        this.state = {
            displayPosts: [],
            user: '',
            // userType: { label: (`users:${defaultUserType.label}`), value: defaultUserType.value },
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
        if (key === 'searchFilterResults' || 'user' || 'userType') {
            this.setState({ error: null, [key]: value }, () => {
                //console.log("this noErrorState:", this);
                this.setState({ searchFilterResults: this.state.searchFilterResults, user: this.state.user , userType: this.state.userType});
                // console.log("this updatedFilter/UserState:", this);
            });
        } else { this.setState({ error: null, [key]: value }); }

    }

    handleDropdownChange = (user) => {
        this.setState({user:user});
        //  console.log("this userState:", this);       
    };

    // selectOptions = (options) => {
    //     return options.map((option) => {
    //         return { label: (`users:${option.labelKey}`), value: option.value };
    //     });
    // }
  
    render() {
        // const { displayPosts } = this.state
        // refactor and replace displayPosts with filteredPosts that you can search 
        const { displayPosts, searchFilterResults } = this.state
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
                            // options={ this.selectOptions(selectFilterOptions.userType.options) }
                            placeholder='Select User'
                            required={false}
                            type='select'
                            value={this.state.user}
                            // value={this.state.userType}
                            onChange={event => this.updateSearchInputs('user', event.target.value)}                   
                            // onChange={event => this.updateSearchInputs('userType', event.target.value)}
                            // onChange={ val => this.updateSearchInputs('user', val) }
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