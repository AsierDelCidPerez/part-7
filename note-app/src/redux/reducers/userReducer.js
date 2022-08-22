const userReducer = (state=null, action) => {
    switch(action.type){
        case 'SET_USER':
            return action.data
        case 'UNSET_USER':
            return null
        default: 
            return state
    }
}

export const actOfSetUserWithUser = user => {
    return {
        type: 'SET_USER',
        data: user
    }
}

export const actOfUnsetUser = () => {
    return {
        type: 'UNSET_USER'
    }
}

export default userReducer