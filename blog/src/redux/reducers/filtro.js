const filtroReducer = (state='', action) => {
    switch(action.type){
        case 'SET_FILTRO':
            return action.filtro
        default:
            return state
    }
}

export const actOfSetFiltro = filtro => {
    return {
        type: 'SET_FILTRO',
        filtro
    }
}

export default filtroReducer