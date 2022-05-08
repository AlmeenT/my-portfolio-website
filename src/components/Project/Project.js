import React from 'react'
import './Project.css'
import tf from '../Assets/tf1.jpg'
import sf from '../Assets/tf2.jpg'

function Project() {
  return (
    <div>
        <div className='projectIntro'>
            <h1> Milestones of Projects </h1>
            <p> Here are a few projects I have worked on</p>
        </div>
        <div className='projects'>
            <div className='project1'> E-commerce Website <p> HTML, CSS, JAVASCRIPT </p> </div>
            <div className='project2'> Restaurant App <p> REACT</p> </div>
            <div className='project3'> Dictionary App <p> PYTHON </p></div>
            <div className='project4'> Beneficiary of Side Hustle Internship <p> REACT </p></div>
        </div>
        <div className='testimony'>
            <div className='testimonyIntro'> <p>Testimony  & Reccomendations </p></div>
            <div className='testifiers'>
                <div>
                    <img className='testImage' src={tf} alt='' />
                    <h3>Taribo West</h3>
                    <p>"Al-ameen is dope!"</p>
                </div>
                <div>
                    <img className='testImage' src={sf} alt='' />
                    <h3>Tao Balinga</h3>
                    <p>"o poor fun!"</p>
                </div>
                <div>
                    <img className='testImage' src={sf} alt='' />
                    <h3>Taye Currency</h3>
                    <p> "o por fun!"</p>
                </div>
                <div>
                    <img className='testImage' src={tf} alt='' />
                    <h3>Taofiq Ismail</h3>
                    <p>"Al-ameen is dope!"</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Project