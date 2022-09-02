import { useSelector } from "react-redux"
import LoggedForm from "../dependences/auth/LoggedForm"
import LoginForm from "../dependences/auth/LoginForm"
import UsersGlobal from "../dependences/users/UsersGlobal"


const User = () => {
    const user = useSelector(state => state.user)
    const getLoggedForm = () => <div><UsersGlobal/></div>
    const getLoginForm = () => <LoginForm/>
    return (
        <div>
            {user && getLoggedForm()}
            {!user && getLoginForm()}
        </div>    
    )
}

export default User