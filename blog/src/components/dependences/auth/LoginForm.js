import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { logInUser } from '../../../redux/compounds/user'
import Titulo from '../others/Titulo'
import {TextField, Button, Grid} from '@mui/material'

const LoginForm = () => {
    const [userFields, setUserFields] = useState({
        username: '', password: ''
    })
    const dispatch = useDispatch()

    const updateUserFields = tipo => event => setUserFields({
        ...userFields, [tipo]: event.target.value
    })

    const handleLogin = async event => {
        event.preventDefault()
        dispatch(logInUser(userFields))
    }

    return (
        <form onSubmit={handleLogin} id="blogLoginForm">
            <Titulo text="Login"/>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TextField fullWidth variant='outlined' value={userFields.username} id="usernameFieldBlogLoginForm" onChange={updateUserFields('username')} label="username"/>
                </Grid>
                <Grid item xs={4}>
                    <TextField fullWidth type="password" variant='outlined' value={userFields.password} id="passwordFieldBlogLoginForm" onChange={updateUserFields('password')} label="password"/>
                </Grid>
                <Grid item xs={4}>
                    <Button fullWidth size="large" variant='contained' type="submit" id="submitButtonBlogLoginForm">Login</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default LoginForm