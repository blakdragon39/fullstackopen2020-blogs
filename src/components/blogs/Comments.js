import React, { useEffect, useState } from 'react'
import PropType from 'prop-types'
import { useDispatch } from 'react-redux'
import blogService from '../../services/blogs'
import { addNotification } from '../../reducers/notificationReducer'

const Comments = ({ blog }) => {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        if (blog) {
            blogService.getComments(blog)
                .then(newComments => setComments(newComments))
        }
    }, [blog])

    const submitComment = async (event) => {
        event.preventDefault()

        try {
            const newComment = await blogService.addComment(blog, comment)
            setComments(comments.concat(newComment))
            setComment('')
        } catch (e) {
            console.log(e)
            dispatch(addNotification(e.response.data.error, true))
        }
    }

    return (
        <div>
            <h3>Comments</h3>
            <form onSubmit={submitComment}>
                <input type='text' value={comment} onChange={({ target }) => setComment(target.value)}/>&nbsp;
                <button type='submit'>Add Comment</button>
            </form>
            <ul>
                {
                    comments.map(comment => <li key={comment.id}>{comment.text}</li>)
                }
            </ul>
        </div>
    )
}

Comments.propTypes = {
    blog: PropType.object.isRequired
}

export default Comments
