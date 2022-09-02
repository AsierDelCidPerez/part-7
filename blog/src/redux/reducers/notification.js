
const notificationReducer = (state={text:null,type:1}, action) => {
    switch(action.type){
        case 'SET_NOTIFICATION':
            return action.data
        default: 
            return state
    }
}

export const actOfSetNotification = (text, type) => {
    return {
        type: 'SET_NOTIFICATION',
        data: {
            text, type
        }
    }
}

export default notificationReducer