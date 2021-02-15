import React from 'react';

import PostCard from './PostCard';
import '../styles/cardStyles.css';
// decontstructs state which has been set to the response object maps over the response
// returns display of the card reusable component with the title and body of the response
function PostList({ displayPosts }) {
	return (
		<div className="cards">
			{displayPosts.map((post, i) => {
				return <PostCard key={i} title={displayPosts[i].title} body={displayPosts[i].body} />;
			})}
		</div>
	);
}

export default PostList;
