import {useState, useEffect} from 'react'

import Blogs from './components/Blog'
import AddBlog from "./components/AddBlog";
import Login from './components/Login'
import User from './components/User'
import Notifications from './components/Notifications'

import blogService from './services/blogs'
import localStorage from './services/localStorage'

const App = () => {
    const [blogs, setBlogs] = useState([])
    const [user, setUser] = useState(null)
    const [notifications, setNotifications] = useState([])

    useEffect(() => {
        const user = localStorage.getUser()
        if (user) {
            setUser(user)
            blogService.setToken(user.token)
        }
    }, [])

    useEffect(() => {
        blogService.getAll().then(blogs => setBlogs(blogs))
    }, [])

    const addNotification = (notification) => {
        setNotifications(notifications.concat(notification))
        const removeNotification = () => setNotifications(notifications.filter(n => n !== notification))
        setTimeout(removeNotification, 3000)
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
                <AddBlog blogs={blogs} setBlogs={setBlogs} addNotification={addNotification}/>
                <Blogs blogs={blogs}/>
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
