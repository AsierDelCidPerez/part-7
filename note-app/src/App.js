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
import Notification from './components/containers/Notification';
import { useState } from 'react';
import { Container } from '@mui/material';

const App = () => {
  const userLocal = window.localStorage.getItem('NoteAppUserLogin')
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [notification, setNotification] = useState({
    msg: null, 
    type: 1
  })

  if(userLocal && user === null){
      dispatch(actOfSetUserWithUser(JSON.parse(userLocal)))
  }
  const notes = useSelector(state => state.notes)
  const match = useMatch("/notes/:id")
  // console.log(match)
  const note = match ? notes.find(note => note.id === match.params.id) : null

  if(user !== null) setToken(user.token)

  return (
    <Container>
        <div>
          <Navbar/>
        </div>
        <Notification {...notification} setNotf={setNotification} />
        <Routes>
          <Route path="/notes/:id" element={<MyNote myNote={note} setNotification={setNotification}/>}/>
          <Route path="/login" element={
            user ? <Navigate to="/users"/> : <Users setNotification={setNotification}/>
          }/>
          <Route path="/users" element={
            user !== null ?
          <Users setNotification={setNotification}/> : <Navigate to="/login"/>
          }/>
          <Route path="/notes" element={<Notes/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Container>
  )
}

export default App;
