import 'bootstrap/dist/css/bootstrap.css'

const Notification = ({msg, type, setNotf}) => {
    const correctStyle = {
        padding: 20,
        color: "green",
        borderStyle: "solid",
        borderColor: "black"
    }
    const incorrectStyle = {
        padding: 20,
        color: "red",
        borderStyle: "solid",
        borderColor: "black"
    }

    if(msg !== null){
        setTimeout(() => setNotf({
            msg: null, 
            type: 1
        }), 5000)
    }
    /*
    console.log(`Mensaje de error ${msg}`)
    console.log(`Tipo: ${type}`) 
    */
    const getNotf = () => (
        <div className={type === 1 ? "alert alert-success" : "alert alert-danger"}>
            {msg}
        </div>
    )

    return (
        <>
        {msg !== null && getNotf()}
        </>
    )
}

export default Notification