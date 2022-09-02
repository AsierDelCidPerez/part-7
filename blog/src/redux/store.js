import { createStore, combineReducers, applyMiddleware } from 'redux'
import blogReducer from './reducers/blogs'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import filtroReducer from './reducers/filtro'
import userReducer from './reducers/user'
import notificationReducer from './reducers/notification'

const reducer = combineReducers({
    blogs: blogReducer,
    filter: filtroReducer,
    user: userReducer,
    notification: notificationReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store