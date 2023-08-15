import React from 'react'
import './elevator.css'

const Elevator = () => {
  return (
    <section id='elevator'>
        <h5>Why Should You Have Me On Your Team</h5>
        <h2>My Elevator Pitch</h2> 

        <div className='container elevator_container'>
            <div className='elevator_main'>
              <div>
              <iframe src='https://www.youtube.com/embed/n_aG6B5U0R0'
                  frameborder='0'
                  allow='autoplay; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen
                  title='Paul Aderoju Elevator Pitch'>
                  </iframe>
              </div>
            </div>
        </div>
    </section>
  )
}
export default Elevator

