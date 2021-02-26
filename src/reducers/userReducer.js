import loginService from '../services/login'
import localStorage from '../services/localStorage'

export const getUser = () => {
    const user = localStorage.getUser()
    return {
        type: 'users.set',
        data: { user }
    }
}

export const login = (username, password) => {
    return async (dispatch) => {
        const user = await loginService.login(username, password)
        localStorage.setUser(user)
        dispatch({
            type: 'users.login',
            data: { user }
        })
    }
}

export const logout = () => {
    localStorage.setUser(null)

    return {
        type: 'users.logout'
    }
}

const userReducer = (state = null, action) => {
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

export default userReducer
