import React from 'react'
import PostCard from './PostCard'

function PostList({ displayPosts }) {
    return (
        <div>
            {displayPosts.map((post, i) => {
                return (
                    <PostCard
                        key={i}
                        title={displayPosts[i].title}
                        body={displayPosts[i].body}
                    />
                )
            })}
        </div>
    )
}

export default PostList
