import React, { useState } from 'react'
import blogService from '../services/blogs'

const Blogs = ({ blogs, updateBlog }) => (
    <div>
        <h2>Blogs</h2>
        { blogs.map(blog =>
            <Blog key={blog.id} blog={blog} updateBlog={updateBlog}/>
        )}
    </div>
)

const Blog = ({ blog, updateBlog }) => {
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

    const addLike = async () => {
        const newBlog = await blogService.addLike(blog)
        updateBlog(newBlog)
    }

    return (
        <div style={blogStyle}>
            <div>{blog.title} <button onClick={toggleVisible}>{visible ? 'Hide' : 'View'}</button></div>
            <div style={blogBodyStyle}>
                <div>{blog.url}</div>
                <div>Likes: {blog.likes} <button onClick={addLike}>Like</button></div>
                <div>{blog.author}</div>
            </div>
        </div>
    )
}

export default Blogs