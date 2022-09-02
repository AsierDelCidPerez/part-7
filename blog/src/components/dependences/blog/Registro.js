import { useSelector } from 'react-redux'
import Blog from './Blog'

import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper} from '@mui/material'

const Registro = ({notifications}) => {
    const {filter:filtro, blogs} = useSelector(state => state)
    // console.log(filtro)
    const blogsToShow = blogs.filter(blog => blog.title.match(filtro))
    blogsToShow.sort((a, b) => b.likes - a.likes)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Título</TableCell>
                    <TableCell align="right">Autor</TableCell>
                    <TableCell align="right">Likes</TableCell>
                    <TableCell align="right">Added By</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                { 
                    blogsToShow.map(element => <Blog key={element.id} blog={element} notifications={notifications}/>) 
                }
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default Registro