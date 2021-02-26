import blogService from '../services/blogs'

export const getBlogs = () => {
    return async (dispatch) => {
        const blogs = await blogService.getAll()
        dispatch({
            type: 'blogs.get',
            data: {
                blogs
            }
        })
    }
}

export const addBlog = (blog) => {
    return async (dispatch) => {
        const newBlog = await blogService.addBlog(blog)
        dispatch({
            type: 'blogs.add',
            data: {
                blog: newBlog
            }
        })
    }
}

const blogReducer = (state = [], action) => {
    switch (action.type) {
        case 'blogs.get':
            return action.data.blogs
        case 'blogs.add':
            return state.concat(action.data.blog)
        default:
            return state
    }
}

export default blogReducer
