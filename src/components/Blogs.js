import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { likeBlog, deleteBlog } from '../reducers/blogReducer'
import PropType from 'prop-types'
import localStorage from '../services/localStorage'

const sortBlogs = (blogs) => {
    return [].concat(blogs)
        .sort((blog1, blog2) => blog2.likes - blog1.likes)
}

const Blogs = () => {
    const blogs = useSelector(store => sortBlogs(store.blogs))
    return (
        <div>
            <h2>Blogs</h2>
            {
                blogs.map(blog =>
                    <Blog
                        key={blog.id}
                        blog={blog}/>
                )
            }
        </div>
    )
}

const Blog = ({ blog }) => {
    const dispatch = useDispatch()
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

    const addLike = () => dispatch(likeBlog(blog))

    const confirmDelete = () => {
        const confirmDelete = window.confirm(`Really delete ${blog.title}?`)

        if (confirmDelete) {
            dispatch(deleteBlog(blog))
        }
    }

    return (
        <div style={blogStyle} className='blog'>
            <div>{blog.title} <button onClick={toggleVisible}>{visible ? 'Hide' : 'View'}</button></div>
            <div style={blogBodyStyle} className='blogBody'>
                <div>{blog.url}</div>
                <div>Likes: {blog.likes} <button onClick={addLike}>Like</button></div>
                <div>{blog.author}</div>
                <div style={deleteButtonStyle}><button onClick={confirmDelete}>Delete</button></div>
            </div>
        </div>
    )
}

Blog.propTypes = {
    blog: PropType.object.isRequired,
}

export default Blogs
