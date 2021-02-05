const getUser = () => {
    const user =  window.localStorage.getItem('user')
    return user ? JSON.parse(user) : null
}

const setUser = user => {
    if (user) {
        window.localStorage.setItem('user', JSON.stringify(user))
    } else {
        window.localStorage.removeItem('user')
    }
}

const localStorage = {
    getUser,
    setUser
}
export default localStorage