import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { likeBlog } from '../../reducers/blogReducer'

import Comments from './Comments'

const BlogPage = () => {
    const dispatch = useDispatch()

    const id = useParams().id
    const blog = useSelector(store => store.blogs.find(blog => blog.id === id))

    // const deleteButtonStyle = {
    //     display: blog.user && blog.user.id === localStorage.getUser().id ? '' : 'none'
    // }

    const addLike = () => dispatch(likeBlog(blog))

    // const confirmDelete = () => {
    //     const confirmDelete = window.confirm(`Really delete ${blog.title}?`)
    //
    //     if (confirmDelete) {
    //         dispatch(deleteBlog(blog))
    //     }
    // }

    if (blog) {
        return (
            <div>
                <div>
                    <h2>{blog.title}</h2>
                    <div><a href={blog.url}>{blog.url}</a></div>
                    <div>Likes: {blog.likes} <button onClick={addLike}>Like</button></div>
                    <div>{blog.author}</div>
                    {/*<div style={deleteButtonStyle}> <button onClick={confirmDelete}>Delete</button></div>*/}
                </div>
                <Comments blog={blog}/>
            </div>
        )
    } else {
        return null
    }
}

export default BlogPage
