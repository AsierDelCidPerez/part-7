import { useDispatch } from "react-redux"
import { addComent } from "../../../redux/compounds/blog"
import blogService from "../../../services/blog"
import {TextField, Button, Grid} from '@mui/material'

const CommentForm = ({blogId}) => {
    const dispatch = useDispatch()
    const agregarComentario = async event => {
        event.preventDefault()
        const comentario = event.target.comentario.value
        dispatch(addComent(blogId, comentario))
    }
    return (
        <form onSubmit={agregarComentario}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField fullWidth id="outlined-basic" label="Comentario" variant="outlined" name="comentario"/>
                </Grid>
                <Grid item xs={3}>
                    <Button fullWidth type="submit" variant="contained">Add comment</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default CommentForm