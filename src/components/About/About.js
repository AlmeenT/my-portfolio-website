import React from 'react'
import './About.css'
import linkedin from '../Assets/linkedIn.png'
import twitter from '../Assets/Twitter.png'
import html from '../Assets/html.png'
import python from '../Assets/python.png'
import JS from '../Assets/js.png'
import ms from '../Assets/MS.png'


function About() {
  return (
    <div className='about'>
        <div className='Aboutdetails'>
            <h1 className='AboutHeading'> About Me</h1>
            <p className='AboutInfo'> Tiamiyu Al-ameen Iyanu is a passionate, creative and goal driven software engineer whose interest is in using technology to solve real life problem. And looking to become a 'World Class' software engineer as time goes on</p>
        </div>
        <div className='Abouticons'>
            <a href='https://twitter.com/AlmeenT_'>
                <img src={twitter} alt='' />
            </a>
            <a href='https://www.linkedin.com/in/al-ameen-tiamiyu-gmnse-a268bb188/'>
                <img src={linkedin} alt='' />
            </a>
        </div>
        <div className='skills'>
            <div className='SkillsHead'>
                <h1> My Skills</h1>
                <p> Below are some of my skills</p>
            </div>
            <div className='SkillSet'>
                <img src={html} alt=''/>
                <div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default About