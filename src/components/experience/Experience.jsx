import React from 'react'
import './experience.css'
import UC from '../../assets/uc.jpg'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <img src={UC} alt="" />
      <div className="container experience__container">
        <div className="experience__frontend">

        </div>
        <div className="experience__backend">
          
        </div>
      </div>
    </section>
  )
}

export default Experience
