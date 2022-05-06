import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='NavBar'>
        <div className='Fname'> Tiamiyu Al-ameen Iyanu </div>
        <div>
            <ul className='NavLinks'>
                <li> About </li>
                <li> Services </li>
                <li> Projects </li>
                <li> Contact me </li>
            </ul>
        </div>    
    </div>
  )
}

export default NavBar