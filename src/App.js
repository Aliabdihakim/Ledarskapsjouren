import React, {useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Experts from './pages/Experts/Experts'
import BlogLogin from './pages/BlogLogin/BlogLogin'
import CreatePost from './pages/CreatePost/CreatePost'
import Blogg from './pages/Blogg/Blogg'
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import "./App.css"


const App = () => {


  const [isAuth, setIsAuth] = useState(false)

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/experter" element={<Experts />}/>
          <Route path="/blogg" element={<Blogg isAuth={isAuth}/>}/>
          <Route path="/blogg-login" element={<BlogLogin setIsAuth={setIsAuth}/>}/>
          <Route path="skapa-inlagg" element={<CreatePost isAuth={isAuth}/>}/>
        </Routes>
        <Footer />
    </div>
  )
}

export default App
