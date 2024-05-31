import React from 'react'
import './about.css'
import ME from '../../assets/me.webp'
import {FaAward} from 'react-icons/fa'
import {HiOutlineUsers} from 'react-icons/hi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about' >
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Aderoju Paul" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about-card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ year's working</small>
            </article>

            <article className='about-card'>
              <HiOutlineUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className='about-card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>Paul Aderoju is a passionate software engineer with a keen interest in the use of technologies developed for the purpose of improving health and healthcare systems. He is experienced in the development of web applications including Front-end development, Back-end development, with some experience in Cloud Engineering.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
       
    </section>
  )
}

export default About
