import { useDispatch, useSelector } from "react-redux"
import { logOutUser } from "../../../redux/compounds/user"

const LoggedForm = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(logOutUser())
    }
    return (
        <div>
            <h1>Blog</h1>
            <p>Logged in as {user.username}</p><button onClick={logOut}>Log out</button>
        </div>
    )
}

export default LoggedForm