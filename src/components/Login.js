import { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        console.log('logging in with', username, password)
    }

    return(
        <div>
            <h2>Login to Application</h2>
            <form onSubmit={handleLogin}>

            </form>
        </div>
    )
}

export default Login