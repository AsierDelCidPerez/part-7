const notReducer = (state=null, action) => {
    switch(action.type){
        case 'SET_NOTIFICATION':
            return action.data
        default:
            return state
    }
}

export const actOfShowNotfWithMsgAndType = config => { // 1 - Correct, 2 - Incorrect
    return {
        type: 'SET_NOTIFICATION',
        data: config
    }
}

export const actOfHideNotf = () => {
    return {
        type: 'SET_NOTIFICATION',
        data: {
            msg: null
        }
    }
}

export default notReducer