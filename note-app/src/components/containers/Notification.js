import { Alert } from "@mui/material"

const Notification = ({msg, type, setNotf}) => {
    if(msg !== null){
        setTimeout(() => setNotf({
            msg: null, 
            type: 1
        }), 5000)
    }
    
    const getNotf = () => (
        <>
        <Alert severity={type === 1 ? "success": "error"}>
            {msg}
        </Alert>
        <br/>
        </>
    )

    return (
        <>
        {msg !== null && getNotf()}
        </>
    )
}

export default Notification