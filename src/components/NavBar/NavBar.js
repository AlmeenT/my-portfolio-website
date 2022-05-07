import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className='NavBar'>
        <div className='Fname'><Link to='/'> Tiamiyu Al-ameen Iyanu </Link></div>
        <div>
            <ul className='NavLinks'>
                <li><Link to='/about' > About me </Link></li>
                <li><Link to='/services'> Services </Link></li>
                <li><Link to='/projects'> Projects </Link></li>
                <li><Link to='/contactme'> Contact me </Link></li>
            </ul>
        </div>    
    </div>
  )
}

export default NavBar