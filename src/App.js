import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from './reducers/blogReducer'
import { getUsers } from './reducers/userReducer'
import { getLoginUser } from './reducers/loginReducer'
import { BrowserRouter } from 'react-router-dom'

import NavBar from './components/NavBar'
import Login from './components/Login'
import Main from './components/Main'
import Notifications from './components/Notifications'
import blogService from './services/blogs'

const App = () => {
    const user = useSelector(store => store.loginUser)
    const dispatch = useDispatch()

    useEffect(() => dispatch(getLoginUser()), [])
    useEffect(() => dispatch(getBlogs()), [])
    useEffect(() => dispatch(getUsers()), [])

    if (user) {
        blogService.setToken(user.token)
    }

    const body = user === null ? <Login /> : <Main />
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Notifications />
                {body}
            </BrowserRouter>
        </div>
    )
}

export default App
