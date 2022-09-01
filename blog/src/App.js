import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import './App.css';
import Titulo from './components/Titulo';
import Registro from './components/Registro';
import Filtro from './components/Filtro';
import blogService from './services/blog';
import Notification from './components/Notification';
import Agregar from './components/Agregar';
import BlogForm from './components/BlogForm';
import LoginForm from './components/LoginForm';
import LoggedForm from './components/LoggedForm';
import Togglable from './components/Togglable';

function App() {
  const [user, setUser] = useState(null)
  const [notification, setNotification] = useState({
    text: null, isSuccess: true
  })

  useEffect(() => {
    const usuario = window.localStorage.getItem('BlogappUserLogin')
    if(usuario){
      const user = JSON.parse(usuario)
      setUser(user)
      blogService.setToken(user.token)
    }
  })

  const loginOption = () => (
    <Togglable buttonLabel="login" isShown={true}>
      <LoginForm setUsuario={setUser} setNotification={setNotification}/>
    </Togglable>
  )

  const loggedOption = () => (
    <LoggedForm user={user} setUser={setUser}/>
  )

  return (
    <div>
      <Notification text={notification.text} isSuccess={notification.isSuccess}/>
      {user !== null && loggedOption()}
      {user === null && loginOption()}
      <Togglable buttonLabel="new blog">
        <BlogForm setNotification={setNotification} />
      </Togglable>
    </div>
  );
}

export default App;
