const notesReducer = (state=[], action) => {
    switch(action.type){
        case 'NEW_NOTE': //Given the note
            return state.concat(action.data)
        case 'TOGGLE_IMPORTANCE': //Given the id note
            const myAnec = state.find(an => an.id === action.data.id)
            const newAnec = {...myAnec, important: !myAnec.important}
            return state.filter(ans => ans.id !== action.data.id).concat(newAnec)
    
        case 'INIT_NOTES': 
            return action.data
        case 'DELETE_NOTE':
            return state.filter(note => note.id !== action.id)
        default: 
            return state
    }
}



/* Action Creators */

export const actOfCreateNoteWithNote = note => {
    return {
        type: 'NEW_NOTE',
        data: {
            ...note
        }
    }
}

export const actOfInitNotes = notes => {
    return {
        type: 'INIT_NOTES',
        data: notes
    }
}

export const actOfToggleImportanceWithId = id => {
    return {
        type: 'TOGGLE_IMPORTANCE',
        data: {id}
    }
}

export const actOfDeleteNoteWithId = id => {
    return {
        type: 'DELETE_NOTE',
        id
    }
}

export default notesReducer