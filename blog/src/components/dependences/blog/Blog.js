import blogService from "../../../services/blog"
import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { deleteBlog, likeBlog } from "../../../redux/compounds/blog"
import {TableRow, TableCell} from '@mui/material'
import { Link } from "react-router-dom"

const Blog = ({blog, notifications, addLikes=undefined}) => {
    const blogs = useSelector(state => state.blogs)
    const dispatch = useDispatch()
    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
      }
    const [isComplet, setIsComplet] = useState(false)

    const toggleVisible = () => setIsComplet(!isComplet)

    const like = async () => dispatch(likeBlog(blog))
    

    if(!addLikes) addLikes = like

    const eliminarBlog = event => {
        if(window.confirm(`Sure, you want to delete: '${blog.title}'?`)){
            dispatch(deleteBlog(blog.id))
        }
    }

    const hideWithComplet = {display: isComplet ? 'none' : ''}
    const showWithComplet = {display: !isComplet ? 'none' : ''}

    return (

        <TableRow>
            <TableCell><Link to={`/blogs/${blog.id}`}>{blog.title}</Link></TableCell>
            <TableCell align="right">{blog.author}</TableCell>
            <TableCell align="right">{blog.likes}</TableCell>
            <TableCell align="right"><Link to={`/users/${blog.userId.id}`}>{blog.userId.username}</Link></TableCell>
        </TableRow>
    )
}

export default Blog