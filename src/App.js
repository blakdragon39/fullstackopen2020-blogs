import React, {useState, useEffect} from 'react'
import Blogs from './components/Blog'
import Login from './components/Login'
import './App.css'
import blogService from './services/blogs'

const App = () => {
    const [blogs, setBlogs] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        blogService.getAll().then(blogs => setBlogs(blogs))
    }, [])

    if (user == null) {
        return (<Login setUser={setUser}/>)
    } else {
        return (<Blogs blogs={blogs}/>)
    }
}

export default App
