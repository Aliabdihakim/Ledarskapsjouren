import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-div'>
        <div className='footer-div-header' style={{textAlign:"center"}}>
            <h1>Nyhetsbrev</h1>
            <p>Få de senaste nyheterna från Ledarskapsjouren levererade till din inkorg.</p>
            <form className='footer-form'>
                <input 
                type="email"
                placeholder='Ange e-post'
                />
                <button>Prenumerera</button>
            </form>
        </div>

        <div className='footer-div-content'>
            <div>
                <h2>Meny</h2>
                <div className='footer-div-links'>
                    <p><Link to="experter">Experter</Link></p>
                    <p><Link to="blogg">Blogg</Link></p>
                    <p><Link to="omoss">Om oss</Link></p>
                </div>
            </div>
            
            <div>
                <h2>Kontakta oss</h2>
                <div className='footer-div-links'>
                    <p>Info@ledarskapsjouren.se</p>
                    <p>+46704501308</p>
                </div>
            </div>

            <div>
                <h2>Legalt</h2>
                <div className='footer-div-links'>
                    <p>Användarvillkor</p>
                    <p>Integritetspolicy</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer
