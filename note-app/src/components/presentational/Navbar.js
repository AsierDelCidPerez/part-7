import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import { AppBar, Box, Toolbar, Button, IconButton } from '@mui/material'

const MyNavbar = () => {

    const linkStyle = {
        padding: 5,
        textDecoration: "none"
    }

    const user = useSelector(state => state.user)
    return (

        <AppBar position='static' className="m-2">
            <Toolbar disableGutters>
                <Link style={linkStyle} to="/"><img width="80" src="./images/logo.png" alt="logo"/></Link>
                <Box>
                    <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/users">
                        Users
                    </Button>
                    <Button color="inherit" component={Link} to="/notes">
                        Notes
                    </Button>
                    {user ? <span style={linkStyle}>{user.username} logged in</span>
                    : <Button color="inherit" component={Link} to="/login">Login</Button>}
                </Box>
            </Toolbar>
        </AppBar>

        /*
        <Navbar collapseOnSelect expand="lg" variant='light' >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="responsive-navbar-nav">
            <Navbar.Brand href="#"><Link style={linkStyle} to="/"><img width="80" className='img-thumbnail' src="./images/logo.png" alt="logo"/></Link></Navbar.Brand>
                <Nav defaultActiveKey="/home" as="ul">
                    
                    <Nav.Item as="li">
                        <Nav.Link href="#">
                            <Link to="/" style={linkStyle}>Home</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="#">
                            <Link to="/users" style={linkStyle}>Users</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="#">
                            <Link to="/notes" style={linkStyle}>Notes</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="#">
                        {user ? <span style={linkStyle}>{user.username} logged in</span>
                : <Link to={'/users'} style={linkStyle}>Login</Link>}
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
*/
/*
        <nav>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/users" style={linkStyle}>Users</Link>
            <Link to="/notes" style={linkStyle}>Notes</Link>
            {user ? <span style={linkStyle}>{user.username} logged in</span>
          : <Link to={'/users'} style={linkStyle}>Login</Link>}
        </nav>

        */
    )
}

export default MyNavbar