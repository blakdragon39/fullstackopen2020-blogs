const Notifications = ({ notifications }) => (
    <div>
        { notifications.map(notification =>
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

    return(<div className='notification' style={style}>{notification.message}</div>)
}

export default Notifications