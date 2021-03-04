import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from './reducers/blogReducer'
import { getUsers } from './reducers/userReducer'
import { getLoginUser } from './reducers/loginReducer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './components/Login'
import LoginUser from './components/LoginUser'
import Notifications from './components/Notifications'
import BlogsPage from './components/pages/BlogsPage'
import UsersPage from './components/pages/UsersPage'

const App = () => {
    const user = useSelector(store => store.loginUser)
    const dispatch = useDispatch()

    useEffect(() => dispatch(getLoginUser()), [])
    useEffect(() => dispatch(getBlogs()), [])
    useEffect(() => dispatch(getUsers()), [])

    const body = user === null ?
        (<Login />) :
        (
            <div>
                <LoginUser />
                <Switch>
                    <Route path='/users'>
                        <UsersPage />
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
