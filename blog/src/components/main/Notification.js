import {Alert} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

const Notification = () => {
    const notification = useSelector(state => state.notification)
    const dispacth = useDispatch()
    if(notification.text !== null){
        setTimeout(() => dispacth({
            text: null,
            type: 1
        }), 5000)
    }

    const getMyAlert = () => (
        <div>
            <Alert severity={notification.type === 1 ? 'success' : 'error'}>{notification.text}</Alert>
        </div>    
    )
    return (
        <>
            {notification.text && getMyAlert()}  
        </>
    )
}

export default Notification