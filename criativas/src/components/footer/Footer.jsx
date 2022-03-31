import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import{RiInstagramFill} from 'react-icons/ri'
import {BsTwitter} from 'react-icons/bs'





const Footer = () => {
  return (
    <footer>
      <a href= "#" className = 'footer__logo'> Melina Medeiros </a>
    
    <ul className='permalinks'>
      <li> <a href ='#'>Home</a></li>
      <li> <a href ='#about'>About</a></li>
      <li> <a href ='#experience'>Experience</a></li>
      <li> <a href ='#services'>Services</a></li>
      <li> <a href ='#portfolio'>Portfólio</a></li>
      <li> <a href ='#testemonials'>Testemonials</a></li>
      <li> <a href ='#contact'>Contact</a></li>
    </ul>
    <div className='footer__socials'>
      <a href= "https://facebook.com" className = 'footer__logo' > <BsFacebook/> </a>
      <a href= "https://instagram.com" className = 'footer__logo'> <RiInstagramFill/> </a>
      <a href= "https://twitter.com" className = 'footer__logo'> <BsTwitter/> </a>
    </div>
    </footer>
  )
}

export default Footer