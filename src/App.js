import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Experts from './pages/Experts/Experts'
import "./App.css"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/experter" element={<Experts />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
