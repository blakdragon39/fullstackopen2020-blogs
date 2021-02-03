import React, {useState, useEffect} from 'react'

import Blogs from './components/Blog'
import Login from './components/Login'
import User from './components/User'

import blogService from './services/blogs'
import localStorage from './services/localStorage'

const App = () => {
    const [blogs, setBlogs] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        const user = localStorage.getUser()
        if (user) {
            setUser(user)
        }
    }, [])

    useEffect(() => {
        blogService.getAll().then(blogs => setBlogs(blogs))
    }, [])

    const handleLogout = () => {
        localStorage.setUser(null)
        setUser(null)
    }

    if (user == null) {
        return (<Login setUser={setUser}/>)
    } else {
        return (
            <div>
                <User user={user} handleLogout={handleLogout}/>
                <Blogs blogs={blogs}/>
            </div>
        )
    }
}

export default App
