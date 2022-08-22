import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actOfShowNotfWithMsgAndType } from "../../redux/reducers/notReducer"
import { actOfSetUserWithUser } from "../../redux/reducers/userReducer"
import { loginUsingCredentials } from "../../services/loginService"
import { setToken } from "../../services/noteService"
import Notification from "../containers/Notification"
import {useNavigate} from 'react-router-dom'

const LoginForm = () => {
    const dispatch = useDispatch()
    const [notf, setNotf] = useState({
        msg: null,
        type: 1
    })
    const navigate = useNavigate()

    const login = async event => {
        try{
            event.preventDefault()
            const credentials = {username: event.target.username.value, password: event.target.password.value}
            const user = await loginUsingCredentials(credentials)
            window.localStorage.setItem("NoteAppUserLogin", JSON.stringify(user))
            dispatch(actOfSetUserWithUser(user))
            setToken(user.token)
            navigate('/')
        }catch(error) {
            setNotf({
                msg: error.message,
                type: 2
            })
        }
    }
    return (
        <form onSubmit={login}>
            <Notification msg={notf.msg} type={notf.type} setNotf={setNotf}/>
            <input type="text" name="username" placeholder="username"/>
            <input type="password" name="password" placeholder="password"/>
            <button className="btn btn-primary" type="submit">Login</button>
        </form>
    )
}

export default LoginForm