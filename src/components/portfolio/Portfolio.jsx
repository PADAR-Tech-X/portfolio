import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import HealingSprings from '../../assets/healing-spring.png'
import BuilderIo from '../../assets/Builder.io.png'
import EmpathySpace from '../../assets/EmpathySpace.png'
import AnimatedSection from '../AnimatedSection'



const data = [
  {
    id: 1,
    image: EmpathySpace,
    title: 'Empathy Space - Mental Health Therapy Booking and Consultation',
    github: 'https://github.com/PaulBoye-py',
    demo: 'https://www.myempathyspace.com/'
  },
  {
    id: 2,
    image: BuilderIo,
    title: 'Builder.io - AI Event Launch App',
    github: 'https://github.com/PaulBoye-py/next-event-launch-app',
    demo: 'https://next-event-launch-app.vercel.app/'
  },
  {
    id: 3,
    image: HealingSprings,
    title: 'Healing Spring Hospital - IVF Appointment Booking.',
    github: 'https://github.com/PaulBoye-py',
    demo: 'https://www.healingspringhospital.com/'
  },
  {
    id: 4,
    image: IMG5,
    title: 'ALX Team Mavericks Slide Deck - Healthcare Hub App Development',
    github: 'https://github.com/PaulBoye-py',
    demo: 'https://drive.google.com/file/d/18vwj92v4j7EK1myp7iTd9JfNOV7lr2Lk/view?usp=drive_link'
  },

  {
    id: 5,
    image: IMG6,
    title: 'ALX Team Mavericks Video Pitch - Healthcare Hub App Development',
    github: 'https://github.com/PaulBoye-py',
    demo: 'https://www.youtube.com/watch?v=Fe-4vz12ptE'
  },

  {
    id: 6,
    image: IMG1,
    title: 'PriceBeta: A price comparison shopping engine.',
    github: 'https://github.com/PaulBoye-py/Team_21-Price-Compare',
    demo: 'https://pricebetatesting.herokuapp.com/index'
  },

  

  {
    id: 7,
    image: IMG2,
    title: 'Phonie: Detect your mobile carrier.',
    github: 'https://github.com/PaulBoye-py/circle409-1',
    demo: 'https://paulboye-py.github.io/circle409-1/'
  },

  {
    id: 8,
    image: IMG3,
    title: 'SkinLye: Dermatology.',
    github: 'https://github.com/PaulBoye-py/SkinLye',
    demo: 'https://paulboye-py.github.io/SkinLye/'
  },

  {
    id: 9,
    image: IMG4,
    title: 'Counter: Add to cart dummy project.',
    github: 'https://github.com/PaulBoye-py/React-counter',
    demo: ''
  }
]


const Portfolio = () => {

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            );
          }) 
        }
      </div>
    </section>
  )

}

export default Portfolio