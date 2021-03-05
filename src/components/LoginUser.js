import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../reducers/loginReducer'

const LoginUser = () => {
    const dispatch = useDispatch()
    const user = useSelector(store => store.loginUser)

    const style = {
        display: 'inline'
    }

    if (user) {
        return (
            <div style={style}>
                {user.displayName} logged in <button onClick={() => dispatch(logout())}>Logout</button>
            </div>
        )
    } else {
        return null
    }
}

export default LoginUser
