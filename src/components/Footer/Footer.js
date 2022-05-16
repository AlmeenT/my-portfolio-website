import React from 'react'
import './Footer.css'
import linkedin from '../Assets/linkedIn.png'
import twit from '../Assets/Twitter.png'

function Footer() {
  return (
    <div className='footer'>
        <div className='footerIntro'>
            <div></div>
            <h1> Tiamiyu Al-ameen Iyanu. </h1>
            <div></div>
        </div>
        <div className='footerIcon'>
            <img src={linkedin} alt='' />
            <img src={twit} alt='' />
        </div>
        <div className='footerClose'>
            <p> copyright &copy; 2022 | All rights reserved. </p>
        </div>


    </div>
  )
}

export default Footer