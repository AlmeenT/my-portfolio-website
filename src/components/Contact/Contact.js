import React from 'react'
import './Contact.css'
import msg from '../Assets/Message.png'
import call from '../Assets/Call.png'
import twitter from '../Assets/Twitter.png'
import li from '../Assets/linkedIn.png'

function Contact() {
  return (
    <div className='contact'>
      <div className='ContactIntro'>
        <h1> Get In Touch. </h1>
        <p> I can be contacted through any of the following ways</p>
        <a href='https://www.linkedin.com/in/al-ameen-tiamiyu-gmnse-a268bb188/'>
          <img src={li} alt='' />
        </a>
        <a href='https://twitter.com/AlmeenT_'>
          <img src={twitter} alt='' />
        </a>
        <h3 className='iconText'> - AlmeenT </h3>
        <div className='ContactMe'>
          <img src={msg} alt='' />
          <h4> tiamiyualameen@ymail.com</h4>
          <p> Send a message anytime </p>        
        </div>
        <div className='ContactMe'>
          <img src={call} alt='' />
          <h4> +234-817494-1961</h4>
          <p> Put a call through</p>        
        </div>
      </div>
      <div className='contactForm'>
        <div>
          <h2> Need a service?</h2>
          <h1> Send A Message </h1>
          <form action='' >
            <input type='text' placeholder='Enter Fullname' />
            <div className='inputDiv'></div>
            <input type='email' placeholder='Enter Email Address' />
            <input type='text' placeholder='Write A Message' />
            <button> Send Message </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact