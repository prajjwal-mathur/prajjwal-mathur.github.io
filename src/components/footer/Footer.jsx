import React from 'react'
import { BsLinkedin, BsMedium } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import {SiHashnode} from 'react-icons/si'
import logo from '../../assets/logo.png'
import './footer.css'

const Footer = () => {
  return (
    <footer id='contact'>
      <a href="#" className='footer__logo'><img src={logo} alt="" /></a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#stack">Tech Stack</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/slowflash" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/SlowFlash22" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="https://slowflash.hashnode.dev/" target="_blank" rel="noreferrer"><SiHashnode /></a>
        <a href="https://slowflash.medium.com/" target="_blank" rel="noreferrer"><BsMedium /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SlowFlash(2023). Forged with ⚡</small>
      </div>
    </footer>
  )
}

export default Footer
