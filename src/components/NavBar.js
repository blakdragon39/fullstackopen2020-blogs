import React from 'react'
import { Link } from 'react-router-dom'
import LoginUser from './LoginUser'

const NavBar = () => {
    const navBarStyle = {
        padding: 8,
        backgroundColor: '#afafaf',
        marginBottom: 16
    }

    const linkStyle = {
        marginRight: 12
    }

    return (
        <div style={navBarStyle}>
            <Link to='/' style={linkStyle}>Blogs</Link>
            <Link to='/users' style={linkStyle}>Users</Link>
            <LoginUser />
        </div>
    )
}

export default NavBar
