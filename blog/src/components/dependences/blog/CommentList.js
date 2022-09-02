import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import blogService from "../../../services/blog"

const CommentList = ({blogId}) => {
    const blogs = useSelector(state => state.blogs)
    const blog = blogs.find(blog => blog.id === blogId)
    return (
        <div>
            <h1>Comment List</h1>
            <ul>
                {blog?.comments?.map((comentario, i) => <li key={i}>{comentario.comment}</li>)}
            </ul>
        </div>
    )
}

export default CommentList