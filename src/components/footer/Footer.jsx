import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsMedium} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Paul Aderoju</a>

      <ul className='permalinks'>
        <li ><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#elevator">Elevator Pitch</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/pauladeroju/" target={'_blank'} rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/PaulBoye-py" target={'_blank'} rel="noreferrer"><FaGithub /></a>
        <a href="https://medium.com/@paul.adeboye" target={'_blank'} rel="noreferrer"><BsMedium /></a>
        <a href="https://twitter.com/paul_0fficial" target={'_blank'} rel="noreferrer"><BsTwitter /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Paul Aderoju - 2023</small>
      </div>
    </footer>
  )
}

export default Footer