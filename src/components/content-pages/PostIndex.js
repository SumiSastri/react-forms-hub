import React, { Component } from 'react';

import PostList from './PostList';
import SearchFilter from '../filters/SearchFilter';
import SelectFilterComponent from '../filters/SelectFilterComponent';
import RadioButtonsComponent from '../buttons/RadioButtonsComponent';
import { musicGenreOptions, userTypeOptions } from '../data/mock-data/selectFilterDataOptions';

export class PostIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayPosts: [],
			userType: '',
			musicGenre: '',
			searchFilterResults: '',
			loading: false,
			error: null
		};
		this.initialState = this.state;
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((posts) => this.setState({ displayPosts: posts.slice(0, 8) }));
		// .then((posts) => this.setState({}));
		// do not remove checks the loading message works
	}

	updateSearchInputs = (key, value) => {
		if (key === 'searchFilterResults' || key === 'musicGenre' || key === 'userType') {
			this.setState({ error: null, [key]: value }, () => {
				//console.log("this noErrorState:", this);
				this.setState({
					searchFilterResults: this.state.searchFilterResults,
					userType: this.state.userType,
					musicGenre: this.state.musicGenre
				});
				// console.log("this updatedFilter/UserState:", this);
			});
		} else {
			this.setState({ error: null, [key]: value });
		}
	};
	// Alternate way of writing a handle change
	// handleDropdownChange = (userType) => {
	// 	this.setState({ userType: userType.value });
	// };

	//function to clear persisting data on form
	resetAndCloseForm = () => {
		this.setState(this.initialState);
	};

	postFormData = () => {
		this.setState({ error: null });
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			params: {
				userId: this.props.user.id || '',
				userType: this.state.userType,
				musicGenre: this.state.musicGenre,
				searchFilterResults: this.state.searchFilterResults
			}
		})
			.then(({ response }) => {
				if (200 <= response <= 299) {
					this.setState(this.initialState);
				}
			})
			.catch((e) => this.setState({ error: e }));
	};

	render() {
		// const { displayPosts } = this.state
		// refactor and replace displayPosts with filteredPosts that you can search
		const { displayPosts, searchFilterResults, musicGenre, userType } = this.state;
		//  console.log("this renderState:", this);

		const filteredPosts = displayPosts.filter((displayPosts) => {
			return (
				displayPosts.body.toLowerCase().includes(searchFilterResults.toLowerCase()) ||
				displayPosts.title.toLowerCase().includes(searchFilterResults.toLowerCase())
			);
		});

		return !displayPosts.length ? (
			<div>
				<h2>Please wait this page is still loading</h2>
			</div>
		) : (
			<div>
				<form style={{ display: 'flex' }} onSubmit={() => this.postFormData}>
					<RadioButtonsComponent
						className="radio-1"
						defaultValue="default"
						datatestid="radio-btn"
						label="Select User Type"
						required={false}
						type="radio"
						name="radio-btn-userType"
						data={userTypeOptions}
						value={userType}
						onChange={(event) => this.updateSearchInputs('userType', event.target.value)}
					/>
					<SelectFilterComponent
						className="select"
						defaultValue="default"
						datatestid="ddl-usr-type"
						label="Select Music Genre"
						required={false}
						type="select"
						name="ddl-musicGenre"
						data={musicGenreOptions}
						value={musicGenre}
						onChange={(event) => this.updateSearchInputs('musicGenre', event.target.value)}
					/>

					{/* Write onChange handler and set to target value */}
					<SearchFilter
						className="search"
						datatestid="searchfield-posts"
						label="Search Posts"
						placeholder="Search"
						required={false}
						type="search"
						name="search-posts"
						value={searchFilterResults}
						onChange={(event) => this.updateSearchInputs('searchFilterResults', event.target.value)}
					/>
				</form>

				{/* Replaced displayed posts with the filtered posts for search filter */}
				<PostList displayPosts={filteredPosts} />
				{/* <PostList displayPosts={displayPosts} />                 */}
			</div>
		);
	}
}

export default PostIndex;
