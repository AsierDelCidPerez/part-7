import { useState } from "react"
import { useDispatch } from "react-redux"
import { actOfSetUserWithUser } from "../../redux/reducers/userReducer"
import { loginUsingCredentials } from "../../services/loginService"
import { setToken } from "../../services/noteService"
import Notification from "../containers/Notification"
import {useNavigate} from 'react-router-dom'

import { TextField, Button, Grid } from "@mui/material"

const LoginForm = ({setNotification}) => {
    const dispatch = useDispatch()
    const [notf, setNotf] = useState({
        msg: null,
        type: 1
    })
    const navigate = useNavigate()

    const login = async event => {
        event.preventDefault()
        try{
            const credentials = {username: event.target.username.value, password: event.target.password.value}
            const user = await loginUsingCredentials(credentials)
            window.localStorage.setItem("NoteAppUserLogin", JSON.stringify(user))
            dispatch(actOfSetUserWithUser(user))
            setToken(user.token)
            setNotification({
                msg: `Welcome ${user.username}`,
                type: 1
            })
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
            <h1 align="center">Login</h1><hr/>
            <Notification msg={notf.msg} type={notf.type} setNotf={setNotf}/>
            <Grid container spacing={3}>
                <Grid item xs>
                    <TextField fullWidth  variant="outlined" type="text" name="username" label="username"/>
                </Grid>
                <Grid item xs>
                    <TextField fullWidth variant="outlined" type="password" name="password" label="password"/>
                </Grid>
                <Grid item xs>
                    <Button fullWidth size="large" type="submit" variant="contained" className="p-3">Login</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default LoginForm