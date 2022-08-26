
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { actOfDeleteNoteWithId } from '../../redux/reducers/notesReducer'
import useResource from '../../services/noteService'
import {Button, TableContainer, Table, TableBody, TableCell, TableHead, Paper, TableRow, Grid} from '@mui/material'

const MyNote = ({myNote, setNotification}) => {
    const user = useSelector(state => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const recurso = useResource('/api/notes')

    const eliminacion = async() => {
        try {
            await recurso.deleteNote(myNote.id)
            setNotification({
                msg: `You have successfully deleted: ${myNote.content}`,
            })
            dispatch(actOfDeleteNoteWithId(myNote.id))
            navigate('/')
        }catch(err) {
            console.error(err.message)
        }
    }

    const eliminarNota = () => {
        if(user){
            if(user.username === myNote.user.username){
                if(window.confirm('¿Estas seguro de eliminar la nota?')){
                    eliminacion()
                }
            }else{
                alert('No puedes eliminar una nota que no es de tu propiedad')
            }
        }else{
            alert('No puedes eliminar una nota que no es de tu propiedad')
        }
    }

    return (
        <div id={myNote.id}>
            <TableContainer component={Paper} margin="normal">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Clave</TableCell>
                            <TableCell>Valor</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Contenido</TableCell>
                            <TableCell>{myNote.content}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell scope="row">Importante</TableCell>
                            <TableCell>{myNote.important ? 'IMPORTANTE' : 'NO IMPORTANTE'}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell scope="row">Autor</TableCell>
                            <TableCell>{myNote.user.name}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
                <Grid item/>
                <br/>
                <Button fullWidth variant="outlined" onClick={eliminarNota} color="error">Eliminar</Button>
        </div>
    )
}

export default MyNote