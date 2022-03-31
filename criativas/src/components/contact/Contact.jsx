import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  return (
    <section id ='contact'>
     <h5>Get in Touch</h5>
     <h2>Contacte-me</h2>

      <div className='container contact__container'>
        <div className= 'contact__options'>
          <article className ='contact_option'>
            <AiOutlineMail className="contact__option-icon"></AiOutlineMail>
            <h4>E-mail</h4>
            <h5>melveks@gmail.com</h5>
            <a href='mailto:melveks@gmail.com'>Enviar uma mensagem</a>
           
          </article>
          <article className ='contact_option'>
          <FaFacebookMessenger className="contact__option-icon"></FaFacebookMessenger>
            <h4>Messenger</h4>
            <h5>melveks@gmail.com</h5>
            <a href='https://www.facebook.com/medeiros.mel1/'>Enviar uma mensagem</a>
           
          </article>
          <article className ='contact_option'>
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>351-934318862</h5>
            <a href="https://api.whatsapp.com/send?phone=934318862">Enviar uma mensagem</a>
           
          </article>
        </div>
        <form action="">
            <input type= "text" name ="Nome" placeholder ="Nome completo" required/>
            <input type= "text" email ="e-mail" placeholder ="Seu e-mail" required/>
            <textarea type= "text" message ="Mensagem" rows="7" placeholder ="Mensagem" required/>
            <button type ="Enviar" className= "btn btn-primary"> Enviar mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact