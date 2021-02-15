import React from 'react';

// deconstructs object key-values from the http response in the card list
// these values are deconstructed from the card list to display them as props of the Card component
export default function PostCard({ title, body }) {
	return (
		<div className="card">
			<h4>{title}</h4>
			<h6>{body}</h6>
		</div>
	);
}
