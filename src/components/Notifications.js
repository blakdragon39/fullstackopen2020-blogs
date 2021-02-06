import './notifications.css'

const Notifications = ({ notifications }) => (
    <div>
        { notifications.map(notification =>
            <Notification key={notification} notification={notification}/>
        )}
    </div>
)

const Notification = ({ notification }) => {
    const style = notification.isError
        ? { color: 'red' }
        : { color: 'green' }

    return(<div className='notification' style={style}>{notification.message}</div>)
}

export default Notifications