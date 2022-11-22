import React from 'react'
import './nav.css'
import { BiHomeCircle } from 'react-icons/bi'
import { BiUser } from 'react-icons/bi'
import { BsBookshelf } from 'react-icons/bs'
import { MdWorkOutline } from 'react-icons/md'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { FaTools } from 'react-icons/fa'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeCircle /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBookshelf /></a>
      <a href="#tech" onClick={() => setActiveNav('#tech')} className={activeNav === '#tech' ? 'active' : ''}><FaTools /></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><MdWorkOutline /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
