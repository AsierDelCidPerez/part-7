
import {Link} from 'react-router-dom'

import { TableRow, TableCell, Button } from '@mui/material'
const Note = ({note, changeImportant}) => {
    const toggleImportance = event => {
        changeImportant(note.id)
    }

    return (
        <TableRow>
            <TableCell>
                <Link to={`/notes/${note.id}`}>{note.content}</Link>
            </TableCell>
            <TableCell>
                <span>{note.user.username}</span>
            </TableCell>
            <TableCell>
                <Button variant="contained" onClick={toggleImportance}>{note.important ? 'MAKE NOT IMPORTANT' : 'MAKE IMPORTANT'}</Button>
            </TableCell>
        </TableRow>
    )
}

export default Note