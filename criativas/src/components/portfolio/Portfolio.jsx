import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'





const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> Meu recente trabalho</h5>
      <h2> Portfólio</h2>

      <div className = "portfolio__container">
        <article className = "portfolio__item">
          <div className = "portfolio__item-image"></div>
          <img src ={IMG1} alt="" className="portfolio__image"/>
          <h3> Este é um portfólio</h3>
          < a href = "https://github.com" className='btn' target ='blank'>GitHub</a>
          < a href = "https://dribbble.com/Alien_pixels"className=' btn btn-primary' >LivDemo</a>

        </article>
        <article className = "portfolio__item">
          <div className = "portfolio__item-image"></div>
          <img src ={IMG2} alt=""className="portfolio__image"/>
          <h3> Este é um portfólio</h3>
          < a href = "https://github.com" className='btn' target ='blank'>GitHub</a>
          < a href = "https://dribbble.com/Alien_pixels"className=' btn btn-primary' >LivDemo</a>

        </article>
        <article className = "portfolio__item">
          <div className = "portfolio__item-image"></div>
          <img src ={IMG3} alt=""className="portfolio__image"/>
          <h3> Este é um portfólio</h3>
          < a href = "https://github.com" className='btn' target ='blank'>GitHub</a>
          < a href = "https://dribbble.com/Alien_pixels"className=' btn btn-primary' >LivDemo</a>

        </article>
        <article className = "portfolio__item">
          <div className = "portfolio__item-image"></div>
          <img src ={IMG4} alt=""className="portfolio__image"/>
          <h3> Este é um portfólio</h3>
          < a href = "https://github.com" className='btn' target ='blank'>GitHub</a>
          < a href = "https://dribbble.com/Alien_pixels"className=' btn btn-primary' >LivDemo</a>

        </article>

        <article className = "portfolio__item">
          <div className = "portfolio__item-image"></div>
          <img src ={IMG5} alt=""className="portfolio__image"/>
          <h3> Este é um portfólio</h3>
          < a href = "https://github.com" className='btn' target ='blank'>GitHub</a>
          < a href = "https://dribbble.com/Alien_pixels"className=' btn btn-primary' >LivDemo</a>

        </article>
        <article className = "portfolio__item">
          <div className = "portfolio__item-image"></div>
          <img src ={IMG6} alt=""className="portfolio__image"/>
          <h3> Este é um portfólio</h3>
          < a href = "https://github.com" className='btn' target ='blank'>GitHub</a>
          < a href = "https://dribbble.com/Alien_pixels"className=' btn btn-primary' >LivDemo</a>

        </article>



      </div>
    
    
    
    
    </section>
  )
}

export default Portfolio