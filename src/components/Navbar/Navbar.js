import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar-nav'>
      <div className="navbar-div-logo">
        <Link className='navbar-logo' to="/">Ledarskapsjouren</Link>
      </div>
      <div className='navbar-div-links'>
        <Link className='navbar-link navbar-experter' to="/experter">Experter</Link>
        <Link className='navbar-link navbar-blogg' to="/blogg">Blogg</Link>
        <Link className='navbar-link navbar-omoss' to="/omoss">Om oss</Link>
      </div>
      <div className='navbar-div-kundportal'>
        <Link className='navbar-kundportal' to="/kundportal">Kundportal</Link>
      </div>
    </nav>
  )
}

export default Navbar
