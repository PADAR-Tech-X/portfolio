import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me.webp'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Paul Aderoju</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA/>
        <HeaderSocials/>
        
        <div className="me">
          <img src={me} alt="aderoju-paul" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header