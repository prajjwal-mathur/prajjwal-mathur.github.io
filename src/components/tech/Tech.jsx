import React from 'react'
import './tech.css'
import { BsPatchCheckFill } from 'react-icons/bs'
const Tech = () => {
  return (
    <section id='stack'>
      <h5>What Skills I have</h5>
      <h2>My Tech Toolbox</h2>
      <div className="container stack__container">
        {/* =========Experienced Part Starts here ============*/}
        <div className="stack__frontend">
          <h3>Experienced</h3>
          <div className="stack__content">
            <article className='stack__details'>
              <BsPatchCheckFill className='stack__details-icon'/>
              <h4>HTML/CSS</h4>
            </article>
            <article className='stack__details'>
              <BsPatchCheckFill className='stack__details-icon'/>
              <h4>JavaScript</h4>
            </article>
            <article className='stack__details'>
              <BsPatchCheckFill className='stack__details-icon'/>
              <h4>Bootstrap</h4>
            </article>
            <article className='stack__details'>
              <BsPatchCheckFill className='stack__details-icon'/>
              <h4>React Js</h4>
            </article>
            <article className='stack__details'>
              <BsPatchCheckFill className='stack__details-icon'/>
              <h4>MongoDB</h4>
            </article>
          <article className='stack__details'>
            <BsPatchCheckFill className='stack__details-icon'/>
            <h4>C/C++</h4>
          </article>
          <article className='stack__details'>
            <BsPatchCheckFill className='stack__details-icon'/>
            <h4>Java</h4>
          </article>
          <article className='stack__details'>
            <BsPatchCheckFill className='stack__details-icon'/>
            <h4>Git/GitHub</h4>
          </article>
          <article className='stack__details'>
              <BsPatchCheckFill className='stack__details-icon'/>
              <h4>Python</h4>
            </article>
            <article className='stack__details'>
              <BsPatchCheckFill className='stack__details-icon'/>
              <h4>SQL</h4>
            </article>
          </div>
        </div>


        {/* =========BackEnd Part Starts here ============*/}
        <div className="stack__backend">
          <h3>Familiar (Rudimentary)</h3>
          <div className="stack__content">
            <article className='stack__details'>
              <BsPatchCheckFill className='stack__details-icon'/>
              <h4>Node.js</h4>
            </article>
            <article className='stack__details'>
              <BsPatchCheckFill className='stack__details-icon'/>
              <h4>Django</h4>
            </article>
            <article className='stack__details'>
              <BsPatchCheckFill className='stack__details-icon'/>
              <h4>PHP</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tech