import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/blogs'

let token
const setToken = (newToken) => token = newToken

const header = () => {
    return {
        Authorization: token
    }
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const addBlog = async (newBlog) => {
    const config = { headers: header() }
    const response = await axios.post(baseUrl, newBlog, config)
    return response.data
}

const addLike = async (blog) => {
    const config = { headers: header() }
    const body = { likes: blog.likes + 1 }
    const response = await axios.put(`${baseUrl}/${blog.id}`, body, config)
    return response.data
}

const blogService = { setToken, getAll, addBlog, addLike }
export default blogService