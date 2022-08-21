/* eslint-disable jsx-a11y/img-redundant-alt */
import Header from "../../components/Header"
import './about.css'
import StoryImage from '../../images/about1.jpg'
import HeaderImage from '../../images/header_bg_1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
function vision() {
  return (
    <>
    <Header title="vision Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Dignissimos corporis, dolore sed aut perferendis necessitatibus
        reprehenderit quam, est inventore, autem totam.
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image"/>
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ipsam assumenda asperiores, harum doloremque porro molestias 
             maiores, quaerat sunt odio et facere a. Consectetur corporis 
             assumenda ipsam consequatur obcaecati doloribus porro.
             </p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ipsam assumenda asperiores, harum doloremque porro molestias 
             maiores, quaerat sunt odio.
             </p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ipsam assumenda asperiores, harum doloremque porro molestias 
             </p>
        </div>
      </div>
    </section>

    <section className="about__vission">
      <div className="container about__vission-container">
        <div className="about__section-content">
          <h1>Our Vission</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ipsam assumenda asperiores, harum doloremque porro molestias 
             maiores, quaerat sunt odio et facere a. Consectetur corporis 
             assumenda ipsam consequatur obcaecati doloribus porro.
             </p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ipsam assumenda asperiores, harum doloremque porro molestias 
             maiores, quaerat sunt odio.
             </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vission Image"/>
        </div>
      </div>
    </section>
     

     
    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image"/>
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ipsam assumenda asperiores, harum doloremque porro molestias 
             maiores, quaerat sunt odio et facere a. Consectetur corporis 
             assumenda ipsam consequatur obcaecati doloribus porro.
             </p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ipsam assumenda asperiores, harum doloremque porro molestias 
             maiores, quaerat sunt odio.
             </p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ipsam assumenda asperiores, harum doloremque porro molestias 
             </p>
        </div>
      </div>
    </section>
    </>
    
  )
}

export default vision