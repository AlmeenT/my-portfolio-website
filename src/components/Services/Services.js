import React from 'react'
import './Services.css'
import consult from '../Assets/consultation.png'
import webdev from '../Assets/seo.png'
import responseweb from '../Assets/responsive.png'
import data from '../Assets/server.png'

function Services() {
  return (
    <div>
        <div className='serviceIntro'>
            <h1> Services I Render. </h1>
            <p> As a software engineer, I offer a wide range of services </p>
        </div>
        <div className='services'>
            <div className='service'>
                <img src={responseweb} alt='' />
                <h4> Responsive Web Design </h4>
                <p> I help design mobile-friendly, world-class websites that help scale businesses and customer feedbacks</p>
            </div>
            <div className='service'>
                <img src={data} alt='' />
                <h4> Database Development </h4>
                <p> With equiped skills of data development and maitenance, I could help develop scalable and optimizable database </p>
            </div>
            <div className='service'>
                <img src={consult} alt='' />
                <h4> IT Consultance </h4>
                <p> I offer information technology consulting as a field of activity focused on advising organisations on how best</p>
            </div>
            <div className='service'>
                <img src={webdev} alt='' />
                <h4> Web Development </h4>
                <p> I offer both front-end development and back-end development services that websites lovable and functional</p>
            </div>
        </div>
    </div>
  )
}

export default Services