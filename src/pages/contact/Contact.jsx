/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import "./contact.css"

function Contact() {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Assumenda vero corrupti in! Distinctio animi, est pariatur ipsam voluptate nemo
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:hagerahmed.az2020@gmail.com" target="_blank" rel='norefferrer noopener'><MdEmail/></a>
          <a href="#" target="_blank" rel='norefferrer noopener'><BsMessenger/></a>
          <a href="#" target="_blank" rel='norefferrer noopener'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact