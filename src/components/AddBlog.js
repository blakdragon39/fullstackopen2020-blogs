import { useState } from 'react'

const AddBlog = ({ blogService, addBlog, addNotification, toggleable }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const handleAddBlog = async (event) => {
        event.preventDefault()

        try {
            const newBlog = await blogService.addBlog({
                title: title,
                author: author,
                url: url
            })

            setTitle('')
            setAuthor('')
            setUrl('')
            toggleable.current.toggleState()
            addBlog(newBlog)
            addNotification({ message: `Added blog ${newBlog.title}`})
        } catch (exception) {
            addNotification({
                message: exception.response.data.error,
                isError: true
            })
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

export default AddBlog