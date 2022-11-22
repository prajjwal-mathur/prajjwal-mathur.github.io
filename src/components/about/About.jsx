import React from 'react'
import ME from '../../assets/side.jpg'
import { FaAward } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { RiSuitcaseLine } from 'react-icons/ri'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Developing from past 2 years(Fresher)</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon' />
              <h5>Worked with</h5>
              <small>Binance, Postman API</small>
            </article>

            <article className='about__card'>
              <RiSuitcaseLine className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>

          <p>
            I'm proficiently focussed on improving my skills mainly around:
            <ul>
              <li>React and Python based projects</li>
              <li>DSA</li>
              <li>Publicly learning about blockchain development and new projects coming up in web3 space</li>
              <li>Experiencing new tech</li>
            </ul>
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
