import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNotification } from '../notificationReducer'
import PropType from 'prop-types'
import loginService from '../services/login'
import localStorage from '../services/localStorage'

const Login = ({ setUser }) => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const user = await loginService.login(username, password)
            localStorage.setUser(user)
            setUser(user)
            dispatch(addNotification('Successful login'))
        } catch (exception) {
            console.error(exception)
            dispatch(addNotification(exception.response.data.error, true))
        }
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
                    password <input
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

Login.propTypes = {
    setUser: PropType.func.isRequired,
}

export default Login
