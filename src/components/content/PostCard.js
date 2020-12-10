import React from 'react'

export default function PostCard({ title, body }) {
    return (
        <div>
            <h2>{title}</h2>
            <h4>{body}</h4>
        </div>
    )
}
