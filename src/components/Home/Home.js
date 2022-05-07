import React from 'react'
import './Home.css'
import twitter from '../Assets/Twitter.png'
import linkedin from '../Assets/linkedIn.png'
import me from '../Assets/me.jpeg'

function Home() {
  return (
    <div className='homepage'>
        <div className='HomeInfo'>
            <h4>Hi there,</h4>
            <h3> I AM TIAMIYU AL-AMEEN IYANU</h3>
            <h2> A full stack Developer (python)</h2>
            <div className='icons'>
                <a href='https://twitter.com/AlmeenT_'>
                    <img src={twitter} alt='' />
                </a>
                <a href='https://www.linkedin.com/in/al-ameen-tiamiyu-gmnse-a268bb188/'>
                    <img src={linkedin} alt='' />
                </a>
            </div>
        </div>
        <div className='ProfilePic'>
            <img src={me} alt='' />
        </div>
    </div>
  )
}

export default Home