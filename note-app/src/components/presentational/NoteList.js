import { useEffect } from "react"
import { useSelector } from "react-redux"
import Note from "./Note"

const NoteList = ({notesToShow, changeImportant}) => {
    notesToShow.sort((a, b) => a.content < b.content)
    return (
        <ul>
            {notesToShow.map(note => <Note key={note.id} note={note} changeImportant={changeImportant}/>)}
        </ul>
    )
}

export default NoteList