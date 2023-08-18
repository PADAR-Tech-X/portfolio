import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Elevator from './components/elevator/Elevator'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import AnimatedSection from './components/AnimatedSection'

const App = () => {
  return (
    <>
        <AnimatedSection>
          <Header />
        </AnimatedSection>
        <Nav/>
        <AnimatedSection>
          <About/>
        </AnimatedSection>
        <AnimatedSection>
          <Experience/>
        </AnimatedSection>
        <AnimatedSection>
          <Services/>
        </AnimatedSection>
          <Portfolio/>
        <AnimatedSection>
          <Elevator />
        </AnimatedSection>
        {/* <Testimonials/> */}
        <AnimatedSection>
          <Contact/>
        </AnimatedSection>
        <AnimatedSection>
          <Footer/>
        </AnimatedSection>
    </>
  )
}

export default App