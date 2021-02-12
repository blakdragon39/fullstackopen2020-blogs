import {useState, useEffect, useRef} from 'react'

import Blogs from './components/Blogs'
import AddBlog from "./components/AddBlog";
import Login from './components/Login'
import User from './components/User'
import Notifications from './components/Notifications'
import Toggleable from './components/Toggleable'

import blogService from './services/blogs'
import localStorage from './services/localStorage'

const sortBlogs = (blogs) => {
    return [].concat(blogs)
        .sort((blog1, blog2) => blog2.likes - blog1.likes)
}

const App = () => {
    const [blogs, setBlogs] = useState([])
    const [user, setUser] = useState(null)
    const [notifications, setNotifications] = useState([])
    const toggleRef = useRef()

    useEffect(() => {
        const user = localStorage.getUser()
        if (user) {
            setUser(user)
            blogService.setToken(user.token)
        }
    }, [])

    useEffect(() => {
        blogService.getAll().then(newBlogs => {
            newBlogs = sortBlogs(newBlogs)
            setBlogs(newBlogs)
        })
    }, [])

    const addNotification = (notification) => {
        setNotifications(notifications.concat(notification))
        const removeNotification = () => setNotifications(notifications.filter(n => n !== notification))
        setTimeout(removeNotification, 3000)
    }

    const addBlog = (newBlog) => {
        let newBlogs = blogs.concat(newBlog)
        newBlogs = sortBlogs(newBlogs)
        setBlogs(newBlogs)
    }

    const updateBlog = (newBlog) => {
        const index = blogs.findIndex(blog => blog.id === newBlog.id)
        let newBlogs = [...blogs]
        newBlogs[index] = newBlog
        newBlogs = sortBlogs(newBlogs)
        setBlogs(newBlogs)
    }

    const deleteBlog = async (deleteBlog) => {
        await blogService.deleteBlog(deleteBlog)
        const index = blogs.findIndex(blog => blog.id === deleteBlog.id)
        const newBlogs = [...blogs]
        newBlogs.splice(index, 1)
        setBlogs(newBlogs)
    }

    const handleLogout = () => {
        localStorage.setUser(null)
        setUser(null)
    }

    const body = user == null ?
        (<Login setUser={setUser} addNotification={addNotification}/>) :
        (
            <div>
                <User user={user} handleLogout={handleLogout}/>
                <Toggleable toggleText='Add Blogs' ref={toggleRef}>
                    <AddBlog
                        blogService={blogService}
                        addBlog={addBlog}
                        setBlogs={setBlogs}
                        addNotification={addNotification}
                        toggleable={toggleRef}/>
                </Toggleable>
                <Blogs
                    blogService={blogService}
                    blogs={blogs}
                    updateBlog={updateBlog}
                    deleteBlog={deleteBlog}/>
            </div>
        )
    return (
        <div>
            <Notifications notifications={notifications}/>
            { body }
        </div>
    )
}

export default App
