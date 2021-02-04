import React, { Component } from 'react';
import classNames from 'classnames';

import { userTypeOptions } from '../data/mock-data/selectFilterDataOptions';
import PostList from './PostList';
import ScrollyBar from '../scrolling/ScrollyBar';
import SearchFilter from '../filters/SearchFilter';
import SelectFilter from '../filters/SelectFilter';
import { ButtonComponent } from '../buttons/ButtonComponent';

export class PostIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayPosts: [],
			userType: '',
			searchFilterResults: '',
			loading: false,
			error: null
		};
		this.initialState = this.state;
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((posts) => this.setState({ displayPosts: posts }));
		// .then((posts) => this.setState({}));
		// do not remove checks the loading message works
	}

	updateSearchInputs = (key, value) => {
		if (key === 'searchFilterResults' || key === 'userType') {
			this.setState({ error: null, [key]: value }, () => {
				//console.log("this noErrorState:", this);
				this.setState({ searchFilterResults: this.state.searchFilterResults, userType: this.state.user });
				// console.log("this updatedFilter/UserState:", this);
			});
		} else {
			this.setState({ error: null, [key]: value });
		}
	};
	// Alternate way of writing a handle change
	handleDropdownChange = (userType) => {
		this.setState({ userType: userType.value });
	};

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
		const { displayPosts, searchFilterResults, userType, postFormData, loading } = this.state;
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
				<ScrollyBar>
					<container>
						<form
							onSubmit={() => postFormData}
							style={{
								display: 'flex'
							}}
						>
							<SelectFilter
								className="inpt-1s"
								defaultValue="default"
								data={userTypeOptions}
								datatestid="ddl-usr-type"
								label="Select User Type"
								name="ddl-usr-type"
								onChange={(event) => this.updateSearchInputs('user', event.target.value)}
								placeholder="Select User"
								required={false}
								type="select"
								value={userType}
							/>

							{/* Write onChange handler and set to target value */}
							<SearchFilter
								className="inpt-1s"
								datatestid="searchfield-posts"
								label="Search Posts"
								name="search-posts"
								placeholder="Search"
								required={false}
								type="search"
								onChange={(event) => this.updateSearchInputs('searchFilterResults', event.target.value)}
								value={searchFilterResults}
							/>

							<ButtonComponent
								className={classNames([ 'btn-5' ], { 'button-disabled': loading })}
								datatestid="btn-save"
								disabled={loading}
								label="Save"
								name="btn-save"
								onSubmit={() => postFormData}
								type="submit"
							>
								{loading ? <i className="fas fa-drum" /> : 'defaultValue:save'}
							</ButtonComponent>
						</form>
					</container>
					{/* Replaced displayed posts with the filtered posts */}
					<PostList displayPosts={filteredPosts} />
					{/* <PostList displayPosts={displayPosts} />                 */}
				</ScrollyBar>
			</div>
		);
	}
}

export default PostIndex;
