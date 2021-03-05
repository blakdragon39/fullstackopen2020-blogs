import React from 'react'
import { Route, Switch } from 'react-router-dom'

import LoginUser from './LoginUser'
import BlogPage from './blogs/BlogPage'
import UserPage from './users/UserPage'
import Users from './users/Users'
import BlogsPage from './blogs/BlogsPage'

const Main = () => {
    return (
        <div>
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
}

export default Main
