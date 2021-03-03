import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../reducers/loginReducer'

const LoginUser = () => {
    const dispatch = useDispatch()
    const user = useSelector(store => store.loginUser)

    return (
        <div>
            {user.displayName} logged in <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}

export default LoginUser
