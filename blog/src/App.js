import React, {useState, useEffect} from 'react'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkForUser } from './redux/compounds/user';
import { initializeBlogs } from './redux/compounds/blog';
import { Routes, Route } from 'react-router-dom';
import Users from './components/main/Users';
import Blogs from './components/main/Blogs';
import Home from './components/main/Home';
import User from './components/main/User';
import Navbar from './components/main/Navbar';
import Blog from './components/main/Blog';
import Notification from './components/main/Notification';
import { Container } from '@mui/material'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkForUser())
    dispatch(initializeBlogs())
  }, [])
  
  return (
    <Container>
      <Navbar/>
      <Notification/>
      <Routes>
        <Route path="/blogs/:id" element={<Blog/>}/>
        <Route path="/users/:id" element={<User/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Container>
  );
}

export default App;
