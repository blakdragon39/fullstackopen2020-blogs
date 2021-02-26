import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from './reducers/blogReducer'
import { getUser } from './reducers/userReducer'

import Blogs from './components/Blogs'
import AddBlog from './components/AddBlog'
import Login from './components/Login'
import User from './components/User'
import Notifications from './components/Notifications'
import Toggleable from './components/Toggleable'

import blogService from './services/blogs'

const App = () => {
    const blogs = useSelector(store => store.blogs)
    const user = useSelector(store => store.user)
    const toggleRef = useRef()
    const dispatch = useDispatch()

    useEffect(() => dispatch(getUser()), [])
    useEffect(() => dispatch(getBlogs()), [])

    const body = user === null ?
        (<Login />) :
        (
            <div>
                <User />
                <Toggleable toggleText='Add Blogs' ref={toggleRef}>
                    <AddBlog
                        toggleable={toggleRef}/>
                </Toggleable>
                <Blogs
                    blogService={blogService}
                    blogs={blogs}/>
            </div>
        )
    return (
        <div>
            <Notifications />
            {body}
        </div>
    )
}

export default App
