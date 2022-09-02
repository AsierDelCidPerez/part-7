import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBlog, replaceBlog } from '../../../redux/compounds/blog'
import { TextField, Grid, Button } from '@mui/material'
import { actOfSetNotification } from '../../../redux/reducers/notification'

const Agregar = ({notifications, testing=undefined}) => {
    const [fields, setFields] = useState({
        title: "",
        author: "",
        url: "",
        likes: 0
    })
    const dispatch = useDispatch()
    const blogs = useSelector(state => state.blogs)
    const generarNotification = (text, isSuccess) => {
        notifications({text, isSuccess})
        setTimeout(() => notifications({text: null, isSuccess: false}), 5000)
    }

    const getMyEscritura = tipo => event => {
        const nuevoObj = {...fields}
        nuevoObj[tipo] = event.target.value
        // console.log(nuevoObj)
        setFields(nuevoObj)
    }

    const validar = () => {
        for(let clave in fields){
            if(fields[clave].length === 0) {
                generarNotification(`El campo '${clave}' no puede estar vacío`, false)
                return false
            }
        }
        return true
    }

    const existe = title => {
        let resultado = -1
        blogs.forEach(blog => {
            if(blog.title.trim().toLowerCase() === title.trim().toLowerCase()) resultado = blog.id
        })
        return resultado
    }

    const agregarBlog = async event => {
        if(testing !== undefined) testing(fields)
        event.preventDefault()
        if(validar()){
            const existencia = existe(fields.title)
            if(existencia !== -1){
                if(window.confirm(`The blog '${fields.title}' already exists, so do you like to update it?`)){
                    try{
                        dispatch(replaceBlog(res, id))
                        dispatch(actOfSetNotification(`Blog exitósamente actualizado`, 1))
                    }catch(err) {
                        dispatch(actOfSetNotification(err.message, 0))
                    }
                }
            }else{
                    dispatch(addBlog(fields))
            }
        }
    }

    return (
        <form onSubmit={agregarBlog}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField fullWidth className="outlined-basic" label="Título" variant="outlined" onChange={getMyEscritura('title')}/>
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth className="outlined-basic" label="Autor" variant="outlined" onChange={getMyEscritura('author')}/>
                </Grid>
                <Grid item xs={10}>
                    <TextField fullWidth className="outlined-basic" label="URL" variant="outlined" onChange={getMyEscritura('url')}/>
                </Grid>
                <Grid item xs={2}>
                    <TextField fullWidth className="outlined-basic" label="Likes" variant="outlined" onChange={getMyEscritura('likes')}/>
                </Grid><br/>
                <Grid item xs={12}>
                    <Button fullWidth inputProps={{ inputMode: 'numeric', pattern: '[0-9]+' }} variant="contained" type="submit" id="agregarBlog">Agregar</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default Agregar