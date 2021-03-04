import userService from '../services/users'
import { addNotification } from './notificationReducer'

export const getUsers = () => {
    return async (dispatch) => {
        try {
            const users = await userService.getAll()
            dispatch({
                type: 'users.get',
                data: { users }
            })
        } catch (e) {
            console.log(e)
            dispatch(addNotification(e.response.data.error, true))
        }
    }
}

const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'users.get':
            return action.data.users
        default:
            return state
    }
}

export default userReducer
