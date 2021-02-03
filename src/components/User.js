import React from 'react'

const User = ({ user, handleLogout }) => {
    return (
        <div>
            {user.displayName} logged in <button onClick={() => handleLogout()}>Logout</button>
        </div>
    )
}

export default User