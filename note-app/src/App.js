import './App.css';
import Home from './components/containers/Home';
import Navbar from './components/presentational/Navbar';
import {Routes, Route} from 'react-router-dom'
import Notes from './components/containers/Notes';
import Users from './components/containers/Users';
import { Navigate, useMatch } from 'react-router-dom';
import MyNote from './components/presentational/MyNote';
import { useSelector, useDispatch } from 'react-redux';
import { actOfSetUserWithUser } from './redux/reducers/userReducer';
import { setToken } from './services/noteService';

const App = () => {
  const userLocal = window.localStorage.getItem('NoteAppUserLogin')
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  if(userLocal && user === null){
      dispatch(actOfSetUserWithUser(JSON.parse(userLocal)))
  }
  const notes = useSelector(state => state.notes)
  const match = useMatch("/notes/:id")
  // console.log(match)
  const note = match ? notes.find(note => note.id === match.params.id) : null

  if(user !== null) setToken(user.token)

  return (
    <div>
        <div>
          <Navbar/>
        </div>
        <Routes>
          <Route path="/notes/:id" element={<MyNote myNote={note}/>}/>
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
      </div>
  )
}

export default App;
