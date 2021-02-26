import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import notificationReducer from './reducers/notificationReducer'
import blogReducer from './reducers/blogReducer'
import userReducer from './reducers/userReducer'

const store = createStore(
    combineReducers({
        notifications: notificationReducer,
        blogs: blogReducer,
        user: userReducer
    }),
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store
