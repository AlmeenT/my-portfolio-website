import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className='NavBar'>
        <div className='Fname'><Link to='/' style={{ textDecoration: 'none', color: 'black'}} > Tiamiyu Al-ameen Iyanu </Link></div>
        <div>
            <ul className='NavLinks'>
                <li><Link to='/about' style={{ textDecoration: 'none'}} > About me </Link></li>
                <li><Link to='/services' style={{ textDecoration: 'none'}} > Services </Link></li>
                <li><Link to='/projects' style={{ textDecoration: 'none'}} > Projects </Link></li>
                <li><Link to='/contactme' style={{ textDecoration: 'none'}} > Contact me </Link></li>
            </ul>
        </div>    
    </div>
  )
}

export default NavBar