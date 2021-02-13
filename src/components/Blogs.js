import React, { useState } from 'react'
import PropType from 'prop-types'
import localStorage from '../services/localStorage'

const Blogs = ({ blogs, blogService, updateBlog, deleteBlog }) => (
    <div>
        <h2>Blogs</h2>
        {blogs.map(blog =>
            <Blog
                key={blog.id}
                blog={blog}
                blogService={blogService}
                updateBlog={updateBlog}
                deleteBlog={deleteBlog}/>
        )}
    </div>
)

const Blog = ({ blog, blogService, updateBlog, deleteBlog }) => {
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

    const deleteButtonStyle = {
        display: blog.user && blog.user.id === localStorage.getUser().id ? '' : 'none'
    }

    const toggleVisible = () => setVisible(!visible)

    const addLike = async () => {
        const newBlog = await blogService.addLike(blog)
        updateBlog(newBlog)
    }

    return (
        <div style={blogStyle} className='blog'>
            <div>{blog.title}<button onClick={toggleVisible}>{visible ? 'Hide' : 'View'}</button></div>
            <div style={blogBodyStyle} className='blogBody'>
                <div>{blog.url}</div>
                <div>Likes: {blog.likes}<button onClick={addLike}>Like</button></div>
                <div>{blog.author}</div>
                <div style={deleteButtonStyle}><button onClick={() => deleteBlog(blog)}>delete</button></div>
            </div>
        </div>
    )
}

Blogs.propTypes = {
    blogs: PropType.array.isRequired,
    blogService: PropType.object.isRequired,
    updateBlog: PropType.func.isRequired,
    deleteBlog: PropType.func.isRequired
}

Blog.propTypes = {
    blog: PropType.object.isRequired,
    blogService: PropType.object.isRequired,
    updateBlog: PropType.func.isRequired,
    deleteBlog: PropType.func.isRequired
}

export default Blogs