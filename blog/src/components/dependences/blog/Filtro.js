import blogService from "../../../services/blog"
import { useDispatch } from 'react-redux'
import { actOfSetFiltro } from "../../../redux/reducers/filtro"
import {TextField} from '@mui/material'

const Filtro = () => {
    const dispatch = useDispatch()

    const escritura = async event => {
        const texto = event.target.value
        dispatch(actOfSetFiltro(texto))
    }

    return (
        <TextField type="text" onChange={escritura} variant="outlined" label="Filtro por título"/>
    )
}

export default Filtro