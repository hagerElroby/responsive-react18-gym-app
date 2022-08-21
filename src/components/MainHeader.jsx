/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from 'react-router-dom';
import  Image   from '../images/main_header.png';
const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness Worled</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Labore porro quasi quis, facere dolores quia laudantium 
             ipsa vitae.
          </p>
          <Link to="/plans" className='btn lg'>Get Startes</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt='Main Header Image'/>
          </div>
        </div>
      </div>
    </header>
  )
}


export default MainHeader;