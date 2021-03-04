import React from 'react'
import PropType from 'prop-types'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

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
    const blogStyle = {
        padding: 8,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }

    return (
        <div style={blogStyle} className='blog'>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </div>
    )
}

Blog.propTypes = {
    blog: PropType.object.isRequired,
}

export default Blogs
