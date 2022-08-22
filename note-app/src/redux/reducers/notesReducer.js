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
        default: 
            return state
    }
}



/* Action Creators */

export const actOfCreateNoteWithNote = note => {
    return {
        type: 'NEW_NOTE',
        data: {
            id: note.id,
            content: note.content,
            important: false
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

export default notesReducer