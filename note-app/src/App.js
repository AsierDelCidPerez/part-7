import './App.css';
import Home from './components/containers/Home';
import Navbar from './components/presentational/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Notes from './components/containers/Notes';
import Users from './components/containers/Users';
import {Link, Redirect} from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import MyNote from './components/presentational/MyNote';
import { useSelector, useDispatch } from 'react-redux';
import Login from './components/containers/Login';
import { actOfSetUserWithUser } from './redux/reducers/userReducer';
import { setToken } from './services/noteService';

const checkForUser = () => {
}

const App = () => {
  const userLocal = window.localStorage.getItem('NoteAppUserLogin')
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  if(userLocal && user === null){
      dispatch(actOfSetUserWithUser(JSON.parse(userLocal)))
  }
  
  if(user !== null) setToken(user.token)

  return (
      <Router>
        <div>
          <Navbar/>
        </div>
        <Routes>
          <Route path="/notes/:id" element={<MyNote/>}/>
          <Route path="/login" element={
            user ? <Navigate to="/users"/> : <Users/>
          }/>
          <Route path="/users" element={
            user !== null ?
          <Users/> : <Navigate to="/login"/>
          }/>
          <Route path="/notes" element={<Notes/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
  )
}

export default App;
