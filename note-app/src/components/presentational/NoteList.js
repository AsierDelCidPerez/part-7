
import Note from "./Note"
import {TableContainer, Table, TableBody, Paper} from '@mui/material'

const NoteList = ({notesToShow, changeImportant}) => {
    notesToShow.sort((a, b) => a.content < b.content)
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableBody>
                        {notesToShow.map(note => 
                            <Note key={note.id} note={note} changeImportant={changeImportant}/>
                        )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default NoteList