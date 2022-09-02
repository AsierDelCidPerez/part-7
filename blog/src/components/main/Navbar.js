import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logOutUser } from "../../redux/compounds/user"
import { AppBar, Toolbar, Box, Button,IconButton  } from '@mui/material'
import App from "../../App"

const Navbar = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const paddingStyle = {
        padding: 5
    }
    const navStyle = {
        backgroundColor: "gray"
    }
    const logOut = () => {
        dispatch(logOutUser())
    }
    return (
<>
        <AppBar position="static">
            <Toolbar disableGutters>
                <Box>
                    <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/users">Users</Button>
                    <Button color="inherit" component={Link} to="/blogs">Blogs</Button>
                    <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
                </Box>
                <Box>
                    {user 
                        ? <span>{user.username} logged in <Button color="inherit" onClick={logOut}>log out</Button></span> 
                        : <Button color="inherit" component={Link} to="/users">Login</Button>
                    }
                </Box>
            </Toolbar>
        </AppBar>
        <br/>
</>
        /*
        <nav style={navStyle}>
            <Link to="/" style={paddingStyle}>Home</Link>
            <Link to="/users" style={paddingStyle}>Users</Link>
            <Link to="/blogs" style={paddingStyle}>Blogs</Link>
            {user ? <span>{user.username} logged in <button onClick={logOut}>log out</button></span> : <Link to="/users" style={paddingStyle}>login</Link>}
        </nav>
        */
    )
}

export default Navbar