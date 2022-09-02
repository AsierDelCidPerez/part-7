import { useSelector } from "react-redux"
import { useParams } from "react-router"
import LoggedForm from "../dependences/auth/LoggedForm"
import AddedBlogs from "../dependences/blog/AddedBlogs"


const User = () => {
    const myUser = useSelector(state => state.user)
    const {id} = useParams()
    return (
        <div>
            <AddedBlogs id={id}/>
        </div>    
    )
}

export default User