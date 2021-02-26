import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNotification } from '../reducers/notificationReducer'
import { addBlog } from '../reducers/blogReducer'
import PropTypes from 'prop-types'

const AddBlog = ({ toggleable }) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const handleAddBlog = async (event) => {
        event.preventDefault()

        try {
            const newBlog = {
                title: title,
                author: author,
                url: url
            }
            dispatch(addBlog(newBlog))

            setTitle('')
            setAuthor('')
            setUrl('')
            toggleable.current.toggleState()

            const message = `Added blog ${newBlog.title}`
            dispatch(addNotification(message))
        } catch (exception) {
            dispatch(addNotification(exception.response.data.error, true))
        }
    }

    return (
        <div>
            <h2>Add Blog</h2>
            <form onSubmit={handleAddBlog}>
                <div>
                    Title <input
                        type='text'
                        value={title}
                        name='title'
                        onChange={({ target }) => setTitle(target.value)}/>
                </div>
                <div>
                    Author <input
                        type='text'
                        value={author}
                        name='author'
                        onChange={({ target }) => setAuthor(target.value)}/>
                </div>
                <div>
                    Url <input
                        type='text'
                        value={url}
                        name='url'
                        onChange={({ target }) => setUrl(target.value)}/>
                </div>
                <button type='submit'>Add Blog</button>
            </form>
        </div>
    )
}

AddBlog.propTypes = {
    toggleable: PropTypes.object.isRequired
}

export default AddBlog
