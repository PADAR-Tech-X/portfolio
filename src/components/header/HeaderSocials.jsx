import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsMedium} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/pauladeroju/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/PaulBoye-py" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://medium.com/@paul.adeboye" target="_blank" rel="noreferrer"><BsMedium/></a>
        <a href="https://twitter.com/paul_0fficial" target="_blank" rel="noreferrer"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials