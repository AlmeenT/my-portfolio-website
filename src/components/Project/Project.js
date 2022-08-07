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
            <div className='project1'> SIDE HUSTLE <p> React Intern </p> </div>
            <a href='https://food-restaurant-g75.netlify.app/'><div className='project2'> Restaurant App <p> REACT</p> </div></a>
            <a href=''><div className='project3'> Dictionary App <p> PYTHON </p></div></a>
            <div className='project4'> RECEIVE <p> Lead FrontEnd Developer </p></div>
        </div>
        <div className='testimony'>
            <div className='testimonyIntro'> <p>Testimony  & Reccomendations </p></div>
            <div className='testifiers'>
                <div>
                    <img className='testImage' src={tf} alt='' />
                    <h3>Qoseem</h3>
                    <p>"Al-ameen is dope!"</p>
                </div>
                <div>
                    <img className='testImage' src={sf} alt='' />
                    <h3>Ibrahim</h3>
                    <p>"It was fun working with him, nice!"</p>
                </div>
                <div>
                    <img className='testImage' src={sf} alt='' />
                    <h3>Taye</h3>
                    <p> "He's good at what he does"</p>
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