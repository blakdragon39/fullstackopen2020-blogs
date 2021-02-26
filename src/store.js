import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import notificationReducer from './notificationReducer'

const store = createStore(
    combineReducers({
        notifications: notificationReducer
    }),
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store
