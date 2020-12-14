import React from 'react'

// deconstructs object key-values from the http response in the card list
// these values are deconstructed from the card list to display them as props of the Card component
export default function PostCard({ title, body }) {
    return (
        <div>
            <h2>{title}</h2>
            <h4>{body}</h4>
        </div>
    )
}
