import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from './reducers/blogReducer'

import Blogs from './components/Blogs'
import AddBlog from './components/AddBlog'
import Login from './components/Login'
import User from './components/User'
import Notifications from './components/Notifications'
import Toggleable from './components/Toggleable'

import blogService from './services/blogs'
import localStorage from './services/localStorage'

const App = () => {
    const blogs = useSelector(store => store.blogs)
    const [user, setUser] = useState(null)
    const toggleRef = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        const user = localStorage.getUser()
        if (user) {
            setUser(user)
            blogService.setToken(user.token)
        }
    }, [])

    useEffect(() => {
        dispatch(getBlogs())
    }, [])

    // const updateBlog = (newBlog) => { todo
    //     const index = blogs.findIndex(blog => blog.id === newBlog.id)
    //     let newBlogs = [...blogs]
    //     newBlogs[index] = newBlog
    //     newBlogs = sortBlogs(newBlogs)
    //     setBlogs(newBlogs)
    // }

    // const deleteBlog = async (deleteBlog) => { todo
    //     const confirmDelete = window.confirm(`Really delete ${deleteBlog.title}?`)
    //
    //     if (confirmDelete) {
    //         await blogService.deleteBlog(deleteBlog)
    //         const index = blogs.findIndex(blog => blog.id === deleteBlog.id)
    //         const newBlogs = [...blogs]
    //         newBlogs.splice(index, 1)
    //         setBlogs(newBlogs)
    //     }
    // }

    const handleLogout = () => {
        localStorage.setUser(null)
        setUser(null)
    }

    const body = user === null ?
        (<Login setUser={setUser}/>) :
        (
            <div>
                <User user={user} handleLogout={handleLogout}/>
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
