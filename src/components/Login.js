import { useState } from 'react'
import loginService from '../services/login'
import localStorage from '../services/localStorage'

const Login = ({ setUser, addNotification }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const user = await loginService.login(username, password)
            localStorage.setUser(user)
            setUser(user)
            addNotification({ message: 'Successful login' })
        } catch (exception) {
            console.error(exception)
            addNotification({
                message: exception.response.data.error,
                isError: true
            })
        }
    }

    return(
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
                        onChange={({ target}) => setPassword(target.value)}/>
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login