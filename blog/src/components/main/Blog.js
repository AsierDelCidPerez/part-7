import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import { likeBlog } from "../../redux/compounds/blog"
import blogService from "../../services/blog"
import CommentForm from "../dependences/blog/CommentForm"
import CommentList from "../dependences/blog/CommentList"
import {Button} from '@mui/material'

const Blog = () => {
    const {id} = useParams()
    console.log(id)
    const [blog, setBlog] = useState({})
    const dispatch = useDispatch()

    console.log(id)
    useEffect(() => {
        blogService.getById(id).then(res => setBlog(res))
    }, [])
    const like = () => {
        dispatch(likeBlog(blog))
        setBlog({
            ...blog, 
            likes: parseInt(blog.likes)+1+""
        })
    }

    console.log(blog)
    return (
        <div>
            <h1>{blog.title}</h1><br/>
            <a href={blog.url}>{blog.url}</a>
            <p>{blog.likes}</p><Button variant="outlined" onClick={like}>Like</Button><br/>
            <p>Added by {blog.userId?.username}</p><br/>
            <CommentList blogId={id}/>
            <CommentForm blogId={id}/>
        </div>
    )
}

export default Blog