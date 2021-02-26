import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../reducers/userReducer'

const Login = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault()
        dispatch(login(username, password))
    }

    return (
        <div>
            <h2>Login to Application</h2>
            <form onSubmit={handleLogin}>
                <div>
                    Username <input
                        type='text'
                        value={username}
                        name='username'
                        onChange={({ target }) => setUsername(target.value)}/>
                </div>
                <div>
                    Password <input
                        type='password'
                        value={password}
                        name='password'
                        onChange={({ target }) => setPassword(target.value)}/>
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
