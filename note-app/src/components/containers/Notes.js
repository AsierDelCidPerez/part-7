import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actOfInitNotes, actOfToggleImportanceWithId } from "../../redux/reducers/notesReducer"
import { getAllNotes, updateNote } from "../../services/noteService"
import NoteForm from "../presentational/NoteForm"
import NoteList from "../presentational/NoteList"
import Notification from "./Notification"
import { createNew } from "../../services/noteService"
import { actOfCreateNoteWithNote } from "../../redux/reducers/notesReducer"

const Notes = () => {
    const dispatch = useDispatch()
    const notes = useSelector(state => state.notes)
    const filter = useSelector(state => state.filter)
    const user = useSelector(state => state.user)
    const [notf, setNotf] = useState({
        msg: null,
        type: 1
    })
    useEffect(() => {
        getAllNotes().then(res => dispatch(actOfInitNotes(res)))
    }, [dispatch])

    const getNotesToShow = () => {
        return notes.filter(note => note.content.match(filter))
    }

    const changeImportant = async id => {
        try{
            dispatch(actOfToggleImportanceWithId(id))
            const myNote = notes.filter(note => note.id === id)
            const newNote = {...myNote, important: !myNote.important}
            await updateNote(id, newNote)
        }catch(exception){
            setNotf({
                msg: exception.message,
                type: 2
            })
        }
    }

    const addNote = async content => {
        try{
            const res = await createNew({content, important: false})
            dispatch(actOfCreateNoteWithNote(res))
            setNotf({
                msg: `Has agregado exitosamente: ${content}`,
                type: 1
            })
        }catch(err){
            setNotf({
                msg: err.message,
                type: 2
            })
        }
    }

    const getNoteForm = () => <NoteForm addNote={addNote}/>

    return (
        <div>
            <Notification msg={notf.msg} type={notf.type} setNotf={setNotf}/>
            <h1>Notes</h1><hr/><br/>
            <NoteList notesToShow={getNotesToShow()} changeImportant={changeImportant}/>
            {user !== null && getNoteForm()}
        </div>
    )
}

export default Notes