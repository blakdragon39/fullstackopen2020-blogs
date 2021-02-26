export const addNotification = (message, isError = false, timeoutSeconds = 5) => {
    return async (dispatch) => {
        const id = Math.floor(Math.random() * 10000)

        dispatch({
            type: 'notification.add',
            data: {
                id,
                message,
                isError
            }
        })

        setTimeout(() => dispatch({
            type: 'notification.remove',
            data: {
                id
            }
        }), timeoutSeconds * 1000)
    }
}

const notificationReducer = (state = [], action) => {
    switch (action.type) {
    case 'notification.add':
        return state.concat(action.data)
    case 'notification.remove':
        return state.filter(notification => notification.id !== action.data.id)
    default:
        return state
    }
}

export default notificationReducer
