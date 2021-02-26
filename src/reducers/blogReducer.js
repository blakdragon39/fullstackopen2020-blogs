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

export const likeBlog = (blog) => {
    return async (dispatch) => {
        const newBlog = await blogService.addLike(blog)
        dispatch({
            type: 'blogs.update',
            data: {
                blog: newBlog
            }
        })
    }
}

export const deleteBlog = (blog) => {
    return async (dispatch) => {
        await blogService.deleteBlog(blog)
        dispatch({
            type: 'blogs.delete',
            data: {
                blog: blog
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
        case 'blogs.update': {
            const updatedId = action.data.blog.id
            return state.map(blog => blog.id === updatedId ? action.data.blog : blog)
        }
        case 'blogs.delete':
            return state.filter(blog => blog.id !== action.data.blog.id)
        default:
            return state
    }
}

export default blogReducer
