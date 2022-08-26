import { useSelector } from "react-redux"
import LoggedForm from "../presentational/LoggedForm"
import LoginForm from "../presentational/LoginForm"

const Users = ({setNotification}) => {
    const user = useSelector(state => state.user)
    const getLoginForm = () => <LoginForm setNotification={setNotification}/>
    const getLoggedForm = () => <LoggedForm user={user} setNotification={setNotification}/>

    return (
        <div>
            {user === null && getLoginForm()}
            {user !== null && getLoggedForm()}
        </div>
    )
}

export default Users