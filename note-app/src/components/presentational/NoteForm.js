
import { TextField, Button } from "@mui/material"

const NoteForm = ({addNote}) => {
    const agregarNota = async event => {
        event.preventDefault()
        await addNote(event.target.note.value)
    }

    return (
        <form onSubmit={agregarNota} className="col-md-auto">
            <TextField type="text" name="note" label="my note" className="w-25"/>
            <Button variant="contained" type="submit" className="m-2" size="lg">Save</Button>
        </form>
    )
}

export default NoteForm