import { useDispatch } from "react-redux"
import { actOfCreateNoteWithNote } from "../../redux/reducers/notesReducer"
import { createNew } from "../../services/noteService"


const NoteForm = ({addNote}) => {

    const dispatch = useDispatch()

    const agregarNota = async event => {
        event.preventDefault()
        await addNote(event.target.note.value)
    }

    return (
        <form onSubmit={agregarNota} className="col-md-auto">
            <input type="text" name="note" placeholder="my note..."/>
            <button type="submit">Save</button>
        </form>
    )
}

export default NoteForm