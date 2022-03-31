import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";







const data = [
{

  avatar: AVTR1,
  name:'Maria Costa',
  review: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

},

{

  avatar: AVTR2,
  name:'José Silva',
  review: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

},
{

  avatar: AVTR3,
  name:'Carlos Santos ',
  review: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

},
{

  avatar: AVTR4,
  name:'Madalena Ferreira',
  review: 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'

},


]

const Testimonials = () => {
  return (
    <section id ='testimonials'>
      <h5> Opinião dos Clientes</h5>
      <h2> Testemunhos</h2>

      <Swiper pagination={true} modules={[Pagination]} spaceBetween
      ={40} slidesPerView="1" pagination ={{clickable:true}}  className="container testimunials__container">
        
        
          {
            data.map(({avatar,name,review},index) => {
              return (
                <SwiperSlide  key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt ="Avatar One" className="image__avatar"/>
                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
              </SwiperSlide>
              )
            
            })
          }
        </Swiper>
    </section>
  )
}

export default Testimonials