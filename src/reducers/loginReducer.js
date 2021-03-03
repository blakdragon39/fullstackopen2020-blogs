import loginService from '../services/login'
import localStorage from '../services/localStorage'
import { addNotification } from './notificationReducer'

export const getLoginUser = () => {
    const user = localStorage.getUser()
    return {
        type: 'users.set',
        data: { user }
    }
}

export const login = (username, password) => {
    return async (dispatch) => {
        try {
            const user = await loginService.login(username, password)

            localStorage.setUser(user)
            dispatch({
                type: 'users.login',
                data: { user }
            })
        } catch (e) {
            console.error(e)
            dispatch(addNotification(e.response.data.error, true))
        }
    }
}

export const logout = () => {
    localStorage.setUser(null)

    return {
        type: 'users.logout'
    }
}

const loginReducer = (state = null, action) => {
    switch (action.type) {
        case 'users.set':
        case 'users.login':
            return action.data.user
        case 'users.logout':
            return null
        default:
            return state
    }
}

export default loginReducer
