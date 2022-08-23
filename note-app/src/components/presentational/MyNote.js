
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from './Modal'
import {useNavigate} from 'react-router-dom'
import { actOfDeleteNoteWithId } from '../../redux/reducers/notesReducer'
import useResource from '../../services/noteService'

const MyNote = ({myNote}) => {
    const [modal, setModal] = useState(null)
    const user = useSelector(state => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const recurso = useResource('/api/notes')

    const eliminacion = async() => {
        try {
            await recurso.deleteNote(myNote.id)
            dispatch(actOfDeleteNoteWithId(myNote.id))
            navigate('/')
        }catch(err) {
            console.error(err.message)
        }
    }

    const eliminarNota = () => {
        if(user.username === myNote.user.username){
            if(window.confirm('¿Estas seguro de eliminar la nota?')){
                eliminacion()
            }
        }else{
            alert('No puedes eliminar una nota que no es de tu propiedad')
        }
    }

    return (
        <div id={myNote.id}>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Clave</th>
                    <th scope="col">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">Contenido</th>
                    <td>{myNote.content}</td>
                    </tr>
                    <tr>
                    <th scope="row">Importante</th>
                    <td>{myNote.important ? 'IMPORTANTE' : 'NO IMPORTANTE'}</td>
                    </tr>
                    <tr>
                    <th scope="row">Autor</th>
                    <td>{myNote.user.name}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={eliminarNota}>Eliminar</button>
        </div>
    )
}

export default MyNote