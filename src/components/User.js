import React from 'react'
import PropType from 'prop-types'

const User = ({ user, handleLogout }) => {
    return (
        <div>
            {user.displayName} logged in <button onClick={() => handleLogout()}>Logout</button>
        </div>
    )
}

User.propTypes = {
    user: PropType.object.isRequired,
    handleLogout: PropType.func.isRequired
}

export default User