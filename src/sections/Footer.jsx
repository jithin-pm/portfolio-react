import React from 'react'
import '../styles/footer.css'

function Footer() {
  return (
    <>
    
    <section className="contact" data-aos = 'fade-up' data-aos-duration="1000">
        <div className="sec-head" >
          <p className='contact-text'>CONTACT</p>
        </div>
        <hr data-aos = 'zoom-in' data-aos-duration="2000"/>
        <div className="contact-icons" >
          <a href="https://wa.me/7560844748" target='_blank' >
            <i class="fa-brands fa-whatsapp whatsapp"></i>
          </a>
          <a href="https://github.com/jithin-pm" target='_blank'>
            <i class="fa-brands fa-github git"></i>
          </a>
          <a href="www.linkedin.com/in/joal-p-koshy-a82110297" target='_blank'>
            <i class="fa-brands fa-linkedin linkedin"></i>
          </a>
          <a href="https://www.instagram.com/jithin.pm_/" target='_blank'>
            <i class="fa-brands fa-instagram insta"></i>
          </a>
          <a href="mailto:jithinpm1234@gmail.com" target='_blank'>
            <i class="fa-solid fa-envelope mail"></i>
          </a>
        </div>
      </section>
   
   
    </>
    


  )
}

export default Footer