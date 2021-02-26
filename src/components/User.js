import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../reducers/userReducer'

const User = () => {
    const dispatch = useDispatch()
    const user = useSelector(store => store.user)

    return (
        <div>
            {user.displayName} logged in <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}

export default User
