import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FiTwitter} from 'react-icons/fi'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z8pl7lk', 'template_97scq4w', form.current, 'OM7V0_0S0SXgFrQqj')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contatct Me</h2>

{/* CONTACT OPTIONS */}
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>paul.adeboye@yahoo.com</h5>
            <a href="mailto:paul.adeboye@yahoo.com" target={'_blank'} rel="noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <FiTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>@paul_0fficial</h5>
            <a href="https://twitter.com/paul_0fficial" target={'_blank'} rel="noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+234-808-904-5470</h5>
            <a href="https://wa.link/a1iaa9" target={'_blank'} rel="noreferrer">Send a message</a>
          </article>
        </div>

            {/* FORM AREA */}
         <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your Full Name' required />
            <input type="email" name="email" placeholder='Your Email' required />
            <textarea name="message" id="" cols="30" rows="7" placeholder='Your Mesaage'></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

      
    </section>
  )
}

export default Contact