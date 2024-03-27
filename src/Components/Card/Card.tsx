import "./Card.scss";

type CardProps = {
  name: string;
  description: string;
  image: string;
};

const Card = ({ name, description, image }: CardProps) => {
  return (
  <div className="card">
    <div className="card-container">
    <img
    src={image}
    className="card-container__image"/>
    <h2 className="card-container__heading">{name}</h2>
    <p className="card-container__description">{description}</p>
    </div>
  </div>
  )
};

export default Card;
