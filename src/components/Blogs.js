import React, { useState } from 'react'

const Blogs = ({ blogs }) => (
    <div>
        <h2>Blogs</h2>
        { blogs.map(blog =>
            <Blog key={blog.id} blog={blog}/>
        )}
    </div>
)

const Blog = ({ blog }) => {
    const [visible, setVisible] = useState(false)

    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }

    const blogBodyStyle = {
        display: visible ? '' : 'none'
    }

    const toggleVisible = () => setVisible(!visible)

    return (
        <div style={blogStyle}>
            <div>{blog.title} <button onClick={toggleVisible}>{visible ? 'Hide' : 'View'}</button></div>
            <div style={blogBodyStyle}>
                <div>{blog.url}</div>
                <div>Likes: {blog.likes} <button>Like</button></div>
                <div>{blog.author}</div>
            </div>
        </div>
    )
}

export default Blogs