import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/blogs'

let token
const setToken = (newToken) => token = newToken

const header = () => {
    return {
        Authorization: token
    }
}

const headerConfig = () => {
    return {
        headers: header()
    }
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const addBlog = async (newBlog) => {
    const response = await axios.post(baseUrl, newBlog, headerConfig())
    return response.data
}

const deleteBlog = async (blog) => {
    await axios.delete(`${baseUrl}/${blog.id}`, headerConfig())
}

const addLike = async (blog) => {
    const body = { likes: blog.likes + 1 }
    const response = await axios.put(`${baseUrl}/${blog.id}`, body, headerConfig())
    return response.data
}

const getComments = async (blog) => {
    const response = await axios.get(`${baseUrl}/${blog.id}/comments`)
    return response.data
}

const addComment = async (blog, text) => {
    const response = await axios.post(`${baseUrl}/${blog.id}/comments`, { text }, headerConfig())
    return response.data
}

const blogService = {
    setToken,
    getAll,
    addBlog,
    deleteBlog,
    addLike,
    getComments,
    addComment
}

export default blogService
