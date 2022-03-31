import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/melina2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá eu sou</h5>
        <h1>Melina Medeiros</h1>
        <h5 className="text-light"> Front End Developer</h5>
        <CTA/>
        <HeaderSocials/>

      </div>

      <div className='me'>
        <img src ={ME} className="me_image"/>
    </div>
    <a href='#contact' className='scroll__down'>Scroll Down</a>
  )

    </header>
  )
}

export default Header