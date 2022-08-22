import { useDispatch, useSelector } from "react-redux"
import { actOfSetUserWithUser } from "../../redux/reducers/userReducer"
import { setToken } from "../../services/noteService"
import LoggedForm from "../presentational/LoggedForm"
import LoginForm from "../presentational/LoginForm"

const Users = () => {
    const user = useSelector(state => state.user)
    const getLoginForm = () => <LoginForm/>
    const getLoggedForm = () => <LoggedForm user={user}/>

    return (
        <div>
            {user === null && getLoginForm()}
            {user !== null && getLoggedForm()}
        </div>
    )
}

export default Users