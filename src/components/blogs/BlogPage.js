import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { likeBlog } from '../../reducers/blogReducer'
import blogService from '../../services/blogs'

const BlogPage = () => {
    const [comments, setComments] = useState([])

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

    useEffect(() => {
        if (blog) {
            blogService.getComments(blog)
                .then(newComments => setComments(newComments))
        }
    }, [blog])

    if (blog) {
        return (
            <div>
                <div>
                    <h2>{blog.title}</h2>
                    <div>{blog.url}</div>
                    <div>Likes: {blog.likes} <button onClick={addLike}>Like</button></div>
                    <div>{blog.author}</div>
                    {/*<div style={deleteButtonStyle}> <button onClick={confirmDelete}>Delete</button></div>*/}
                </div>
                <div>
                    <h3>Comments</h3>
                    <ul>
                        {
                            comments.map(comment => <li key={comment.id}>{comment.text}</li>)
                        }
                    </ul>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default BlogPage
