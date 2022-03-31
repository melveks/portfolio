import React from 'react'
import './About.css'
import ME from '../../assets/melina3.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'

export const About = () => {
  return (
    <section id='about' >
      <h5>Get to know</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about_image" className="about__image1"/>

            

          </div>
        </div>
        <div className="about__content">
          <div className ="about__cards">
            <article className='about__card'>
              <FaAward className ='about__icon'/>
                <h5>Experience</h5>
              <small> 1 Year Working</small>

            </article>
            <article className='about__card'>
              <FiUsers className ='about__icon'/>
                <h5>Clients</h5>
              <small> xxxxxxxxx</small>

            </article>
            <article className='about__card'>
              <BsFolderCheck className ='about__icon'/>
                <h5>Projects</h5>
              <small> xxxxxxx</small>

            </article>
          </div>
          <div>
            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eaque quidem maxime qui iste perspiciatis quis? 
              Perspiciatis dolorum, iusto eveniet ab dolores cum sit quis a animi laudantium, expedita consequuntur.
            </p>
            <a href="#contact" className= 'btn btn-primary'> Let's talk</a>
          </div>



        </div>
      </div>
    </section>
  )
}
 export default About