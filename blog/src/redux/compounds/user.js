import { useDispatch } from "react-redux"
import blogService from "../../services/blog"
import loginService from "../../services/loginService"
import { actOfSetNotification } from "../reducers/notification"
import { actOfLogOut, actOfSetUser } from "../reducers/user"

const inicializarAuthServices = token => {
    blogService.setToken(token)
}

export const checkForUser = () => {
    return async dispacth => {
        const user = JSON.parse(window.localStorage.getItem('BlogappUserLogin'))
        if(user){
            dispacth(actOfSetUser(user))
            inicializarAuthServices(user?.token)
        }
    }
}

export const logOutUser = () => {
    return async dispatch => {
        dispatch(actOfLogOut())
        window.localStorage.removeItem('BlogappUserLogin')
    }
}

export const logInUser = userFields => {
    return async dispatch => {
        try {
            const usuario = await loginService.login(userFields)
            dispatch(actOfSetUser(usuario))
            inicializarAuthServices(usuario?.token)
            window.localStorage.setItem('BlogappUserLogin', JSON.stringify(usuario))
            dispatch(actOfSetNotification(`Welcome ${usuario?.username}`, 1))
        }catch(err){
            dispatch(actOfSetNotification(err.message, 0))
        }
    }
}