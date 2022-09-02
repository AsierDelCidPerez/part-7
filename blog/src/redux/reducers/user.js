const userReducer = (state=null, action) => {
    switch(action.type){
        case 'SET_USER': 
            return action.user
        case 'LOG_OUT':
            return null
        default:
            return state
    }
}

export const actOfSetUser = user => {
    return {
        type: 'SET_USER',
        user
    }
}

export const actOfLogOut = () => {
    return {
        type: 'LOG_OUT'
    }
}

export default userReducer