import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from './reducers/blogReducer'
import { getUsers } from './reducers/userReducer'
import { getLoginUser } from './reducers/loginReducer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './components/Login'
import LoginUser from './components/LoginUser'
import Notifications from './components/Notifications'
import Users from './components/users/Users'
import BlogPage from './components/blogs/BlogPage'
import BlogsPage from './components/blogs/BlogsPage'
import UserPage from './components/users/UserPage'
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

    const body = user === null ?
        (<Login />) :
        (
            <div>
                <LoginUser />
                <Switch>
                    <Route path='/blogs/:id'>
                        <BlogPage />
                    </Route>
                    <Route path='/users/:id'>
                        <UserPage />
                    </Route>
                    <Route path='/users'>
                        <Users />
                    </Route>
                    <Route path='/'>
                        <BlogsPage />
                    </Route>
                </Switch>
            </div>
        )
    return (
        <div>
            <BrowserRouter>
                <Notifications />
                {body}
            </BrowserRouter>
        </div>
    )
}

export default App
