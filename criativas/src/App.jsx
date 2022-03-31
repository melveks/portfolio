import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'

export const App = () => {
  return (

    <div>
       <Header/>
       <Nav/>
       <About/>
       <Experience/>
        <Services/>
       <Portfolio/>
       <Testimonials/>
       <Contact/>
       <Footer/>

    </div>
  )
}
 export default App

 