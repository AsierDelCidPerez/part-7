import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getUser } from "../../../services/userService"

const AddedBlogs = ({id}) => {
    const [user, setUser] = useState({})
    useEffect(() => {
        getUser(id).then(res => setUser(res))
    }, [])
    console.log(user)
    return (
        <div>
            <h1>Added Blogs</h1>
            <ul>
                {user?.blogs?.map(blog => <li key={blog?.id}><Link to={`/blogs/${blog.id}`}>{blog?.title}</Link></li>)}
            </ul>
        </div>
    )
}

export default AddedBlogs