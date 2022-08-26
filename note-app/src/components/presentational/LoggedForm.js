import { useDispatch } from "react-redux"
import { actOfUnsetUser } from "../../redux/reducers/userReducer"


const LoggedForm = ({user, setNotification}) => {
    const dispatch = useDispatch()
    const logOut = () => {
        window.localStorage.removeItem('NoteAppUserLogin')
        dispatch(actOfUnsetUser())
        setNotification({
            msg: `You have succesfully logged out`,
            type: 1
        })
    }

    return (
        <div>
            <span>Logged in as {user.name}</span>
            <button onClick={logOut} className="btn btn-primary">Log out</button>
        </div>
    )
}

export default LoggedForm