
import {Link} from 'react-router-dom'

const Note = ({note, changeImportant}) => {

    const toggleImportance = event => {
        changeImportant(note.id)
    }

    return (
        <li>
            <Link to={`/notes/${note.id}`}>{note.content}</Link>
            &nbsp;
            <button onClick={toggleImportance}>{note.important ? 'MAKE NOT IMPORTANT' : 'MAKE IMPORTANT'}</button>
        </li>
    )
}

export default Note