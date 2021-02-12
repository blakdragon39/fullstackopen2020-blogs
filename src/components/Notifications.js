import React from 'react'
import PropType from 'prop-types'

const Notifications = ({ notifications }) => (
    <div>
        {notifications.map(notification =>
            <Notification key={notification} notification={notification}/>
        )}
    </div>
)

const Notification = ({ notification }) => {
    const style = {
        background: 'lightgrey',
        fontsize: '20',
        borderStyle: 'solid',
        borderRadius: '5',
        padding: '10',
        marginBottom: '10',
        color: notification.isError ? 'red' : 'green'
    }

    return (<div className='notification' style={style}>{notification.message}</div>)
}

Notifications.propTypes = {
    notifications: PropType.array.isRequired
}

Notification.propTypes = {
    notification: PropType.object.isRequired
}

export default Notifications