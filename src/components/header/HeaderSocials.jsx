import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/slowflash" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/SlowFlash22" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="https://leetcode.com/SlowFlash/" target="_blank" rel="noreferrer"><SiLeetcode /></a>
    </div>
  )
}

export default HeaderSocials
