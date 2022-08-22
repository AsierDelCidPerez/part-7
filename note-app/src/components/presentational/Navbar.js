import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const linkStyle = {
        padding: 5
    }

    const user = useSelector(state => state.user)
    return (
        <nav>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/users" style={linkStyle}>Users</Link>
            <Link to="/notes" style={linkStyle}>Notes</Link>
            {user ? <span style={linkStyle}>{user.username} logged in</span>
          : <Link to={'/users'} style={linkStyle}>Login</Link>}
        </nav>
    )
}

export default Navbar