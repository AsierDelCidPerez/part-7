
const Notification = ({notf, setNotf}) => {

    const getNotf = () => ( 
    <div>
        {notf}
    </div>
    )
    if(notf){
        setTimeout(() => setNotf(null), 5000)
    }
    return (
        <>
            {notf && getNotf()}
        </>
    )
}

export default Notification