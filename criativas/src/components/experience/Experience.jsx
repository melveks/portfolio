import React from 'react'
import './Experience.css'
import{BsPatchCheckFill} from 'react-icons/bs' 

const Experience = () => {
  return (
    <section id= 'experience'>
      <h5> Quais conhecimentos eu tenho </h5>
      <h2> Minha experiência </h2>
      
        <div className="experience__container">
          <div className ="experience__frontend">
            <h3> Desenvolvimento FrontEnd </h3>
                <article className ="experience__details">
                <BsPatchCheckFill/>
                <div>
                <h4> HTML</h4>
                <small className='text-light'> Experiente</small>
                </div>
                
                
            </article>
            <article className ="experience__details">
                <BsPatchCheckFill/>
                <div>
                <h4> CSS</h4>
                <small className='text-light'> Intermediário</small>
                </div>
               
            </article>
            <article className ="experience__details">
            <BsPatchCheckFill/>
                <div>
                <h4> JavaScript</h4>
                <small className='text-light'> Intermediário</small>
                </div>
           
            </article>
        <article className ="experience__details">
        <BsPatchCheckFill/>
                <div>
                <h4> REACT</h4>
                <small className='text-light'> Intermediário</small>
                </div>
        
          </article>
        </div>
        
      
        {/* final do frontend*/}
       
       
        
        <div className ="experience__backend">
            <h3> Desenvolvimento BackEnd </h3>
            <div className="experience__content">
            <article className ="experience__details">
                <BsPatchCheckFill/>
                <div>
                  <h4> Netuno</h4>
                  <small className='text-light'> Experiente</small>
                </div>
                  
              </article>
              <article className ="experience__details">
                  <BsPatchCheckFill/>
                  <div>
                <h4> Netuno</h4>
                <small className='text-light'> Intermediário</small>
                </div>
                  
              </article>
              <article className ="experience__details">
              <BsPatchCheckFill/>
              <div>
                <h4>Netuno</h4>
                <small className='text-light'> Intermediário</small>
                </div>
              
              </article>
          <article className ="experience__details">
          <BsPatchCheckFill/>
                <div>
                <h4> Netuno</h4>
                <small className='text-light'> Intermediário</small>
                </div>
          
            </article>
            </div>
            </div>
          </div> 
  </section>
  )
}

export default Experience
