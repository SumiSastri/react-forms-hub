import React, { Component } from 'react';

class NameAddress extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {
				firstName: '',
				middleName: '',
				familyName: '',
				address1: '',
				address2: '',
				address3: '',
				city: '',
				postcode: '',
				country: ''
			}
		};
	}

	// handleChange = (event) => {
	// 	this.setState({
	// 		firstName: event.target.value,
	// 		middleName: event.target.value,
	// 		familyName: event.target.value,
	// 		address1: event.target.value,
	// 		address2: event.target.value,
	// 		address3: event.target.value,
	// 		city: event.target.value,
	// 		postcode: event.target.value,
	// 		country: event.target.value
	// 	});
	// };


// more efficient refactor
	handleChange = ({ target: { name, value } }) => {
		const data = { ...this.state.data, [name]: value };
		this.setState({ data });
	};

	handleSubmit = (event) => {
		event.preventDefault();
	};

	render() {
		return (
			<form name="name-address" onSubmit={this.handleSubmit}>
				<div>
					<label>First Name:</label>
					<input
						name="firstName"
						type="text"
						placeholder="FirstName"
						value={this.state.data.firstName}
						className="first-name"
						onChange={this.handleChange}
					/>
				</div>
				<br />
				<div>
					<label>Middle Name or Initial:</label>
					<input
						name="middleName"
						type="text"
						placeholder="Middle Name or Initial"
						value={this.state.data.middleName}
						className="middle-name"
						onChange={this.handleChange}
					/>
				</div>
				<br />
				<div>
					<label>Family Name:</label>
					<input
						name="familyName"
						type="text"
						placeholder="Family Name"
						value={this.state.data.familyName}
						className="family-name"
						onChange={this.handleChange}
					/>
				</div>
				<br />
				<div>
					<label>Address1:</label>
					<input
						name="address1"
						type="text"
						placeholder="First line of address"
						value={this.state.data.address1}
						className="address-1"
						onChange={this.handleChange}
					/>
				</div>
				<br />
				<div>
					<label>Address2:</label>
					<input
						name="address2"
						type="text"
						placeholder="Second line of address"
						value={this.state.data.address2}
						className="address-2"
						onChange={this.handleChange}
					/>
				</div>
				<br />
				<div>
					<label>Address3:</label>
					<input
						name="address3"
						type="text"
						placeholder="Third line of address"
						value={this.state.data.address3}
						className="address-3"
						onChange={this.handleChange}
					/>
				</div>
				<br />
				<div>
					<label>City:</label>
					<input
						name="city"
						type="text"
						placeholder="City"
						value={this.state.data.city}
						className="city-name"
						onChange={this.handleChange}
					/>
				</div>
				<br />
				<div>
					<label>PostCode:</label>
					<input
						name="postcode"
						type="text"
						placeholder="Post Code"
						value={this.state.data.postcode}
						className="post-code"
						onChange={this.handleChange}
					/>
				</div>
				<br />
				<div>
					<label>Country:</label>
					<input
						name="country"
						type="text"
						placeholder="Country"
						value={this.state.data.country}
						className="country"
						onChange={this.handleChange}
					/>
				</div>
				<br />
				<button>Submit </button>
			</form>
		);
	}
}
export default NameAddress;
