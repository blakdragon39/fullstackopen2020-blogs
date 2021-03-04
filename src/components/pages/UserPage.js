import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const UserPage = () => {
    const id = useParams().id
    const user = useSelector(store => store.users.find(user => user.id === id))

    if (user) {
        return (
            <div>
                <h2>{ user.displayName }</h2>
                <h3>Added Blogs</h3>
                <ul>
                    {
                        user.blogs.map(blog => <li key={blog.id}>{blog.title}</li>)
                    }
                </ul>
            </div>
        )
    } else {
        return null
    }
}

export default UserPage
