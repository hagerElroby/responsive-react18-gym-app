/* eslint-disable react/jsx-no-target-blank */
import Card from '../UI/Card'
import '../pages/trainers/trainers.css'
const Trainer = ({id , image , name , job , socials}) => {
  return (
    <Card className="trainer">
      <div className="trainer__img">
            <img src={image} alt={name}/>
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <div className="trainer__socials">
            {
                  socials.map(({icon , link} , index) => {
                        return <a key={index} href={link} target="_blank" rel=" noreffer noopener">{icon}</a>
                  })
            }
      </div>
    </Card>
  )
}

export default Trainer
