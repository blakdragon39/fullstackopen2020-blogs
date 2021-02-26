import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import notificationReducer from './reducers/notificationReducer'
import blogReducer from './reducers/blogReducer'

const store = createStore(
    combineReducers({
        notifications: notificationReducer,
        blogs: blogReducer
    }),
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store
