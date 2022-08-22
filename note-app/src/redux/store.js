import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import notesReducer from './reducers/notesReducer'
import notReducer from './reducers/notReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
    notification: notReducer,
    notes: notesReducer,
    user: userReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store