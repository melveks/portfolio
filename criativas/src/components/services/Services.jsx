import React from 'react'
import './Services.css'
import{FaCheck} from 'react-icons/fa'




const Services = () => {
  return (
    <section id= 'services'>
      <h5> O que eu ofereço</h5>
      <h2> Serviços</h2>
      <div className ="services__container"> 
      <article className="service" >
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>

        <ul className='service__list'>
          <li> 
            <FaCheck className='service__list-icon'/>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. .
            </p>
          </li>
          <li> 
            <FaCheck className='service__list-icon'/>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             
            </p>
          </li>
          <li> 
            <FaCheck className='service__list-icon'/>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </li>
          </ul>
      </article>
      <article className="service" >
        <div className="service__head">
          <h3>Web Development</h3>
        </div>

        <ul className="service__list">
          <li> 
            <FaCheck className='service__list-icon'/>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. .
            </p>
          </li>
          <li> 
            <FaCheck className='service__list-icon'/>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             
            </p>
          </li>
          <li> 
            <FaCheck className='service__list-icon'/>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </li>
          </ul>
      </article>
      <article className="service" >
        <div className="service__head">
          <h3>Conteúdo</h3>
        </div>

        <ul className='service__list'>
          <li> 
            <FaCheck className='service__list-icon'/>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. .
            </p>
          </li>
          <li> 
            <FaCheck className='service__list-icon'/>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             
            </p>
          </li>
          <li> 
            <FaCheck className='service__list-icon'/>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </li>
          </ul>
      </article>
      </div>
    </section>
  )
}

export default Services