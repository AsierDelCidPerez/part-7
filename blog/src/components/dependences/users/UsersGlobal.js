import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllUsers } from "../../../services/userService"

const UsersGlobal = () => {

    const [globalUsers, setGlobalUsers] = useState([])

    useEffect(() => {
        getAllUsers().then(res => setGlobalUsers(res))
    }, [])

    console.log(globalUsers)
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {
                    globalUsers.map(user => <li key={user.id}><Link to={`/users/${user.id}`}>{user.username} ({user.blogs.length} blogs created)</Link></li>)
                }
            </ul>
        </div>    
    )
}

export default UsersGlobal