import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from './reducers/blogReducer'
import { getUsers } from './reducers/userReducer'
import { getLoginUser } from './reducers/loginReducer'

import Users from './components/Users'
import Blogs from './components/Blogs'
import AddBlog from './components/AddBlog'
import Login from './components/Login'
import LoginUser from './components/LoginUser'
import Notifications from './components/Notifications'
import Toggleable from './components/Toggleable'

const App = () => {
    const user = useSelector(store => store.loginUser)
    const toggleRef = useRef()
    const dispatch = useDispatch()

    useEffect(() => dispatch(getLoginUser()), [])
    useEffect(() => dispatch(getBlogs()), [])
    useEffect(() => dispatch(getUsers()), [])

    const body = user === null ?
        (<Login />) :
        (
            <div>
                <LoginUser />
                <Toggleable toggleText='Add Blogs' ref={toggleRef}>
                    <AddBlog
                        toggleable={toggleRef}/>
                </Toggleable>
                <Users />
                <Blogs />
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
