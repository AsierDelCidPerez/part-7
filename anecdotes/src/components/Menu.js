import {Link} from 'react-router-dom'

const Menu = () => {
    const padding = {
      paddingRight: 5
    }
    return (
      <div>
        <Link to="/anecdotes" style={padding}>anecdotes</Link>
        <Link to="/create" style={padding}>Create new</Link>
        <Link to="/about" style={padding}>About</Link>
      </div>
    )
}

export default Menu