import blogService from "../../services/blog"
import { actOfAddBlog, actOfDeleteBlog, actOfInitializeBlogs, actOfReplaceBlog } from "../reducers/blogs"


export const initializeBlogs = () => {
    return async dispatch => {
        const blogs = await blogService.getAll()
        dispatch(actOfInitializeBlogs(blogs))
    }
}

export const deleteBlog = id => {
    return async dispatch => {
        await blogService.deleteBlog(id)
        dispatch(actOfDeleteBlog(id))
    }
}

export const addBlog = blog => {
    return async dispatch => {
        const res = await blogService.agregarBlog(blog)
        dispatch(actOfAddBlog(res))
    }
}

export const replaceBlog = (blog, id) => {
    return async dispatch => {
        const updatedBlog = await blogService.editaBlog(blog, id)
        dispatch(actOfReplaceBlog(updatedBlog, id))
    }
}

export const likeBlog = blog => {
    return async dispatch => {
        const newBlog = {
            ...blog,
            likes: parseInt(blog.likes)+1+""
        }
        dispatch(replaceBlog(newBlog, blog.id))
    }
}

export const addComent = (idBlog, comment) => {
    return async dispatch => {
        const myComment = {comment}
        const res = await blogService.addComment(idBlog, myComment)
        dispatch(actOfReplaceBlog(res, idBlog))
    }
}