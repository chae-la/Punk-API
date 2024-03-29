import { useState } from "react";
import "./Card.scss";
import Button from "../Button/Button";
import cross from "../../assets/images/black-cross.png"


type CardProps = {
  name: string;
  description: string;
  image: string;
  food_pairing :string[];
};

const Card = ({ name, description, image, food_pairing }: CardProps) => {
const [showBack, setShowBack] = useState<boolean>(false);
const handleClick = () => {
  setShowBack(!showBack)
};

const frontContent = (
  <div onClick={handleClick}>
    <Button label="More..." />
  </div>
)

const backContent = (
  <>
  <img src={cross} className="card__cross" onClick={handleClick} alt="Close Text"/>
  <h3>Food Pairings</h3>
  <p>Pairs well with... 
    <ul>
      <li>{food_pairing}</li>
      <li>{food_pairing}</li>
      <li>{food_pairing}</li>
    </ul>
    </p>
  {/* <h4>Ingredients</h4> */}
  </>
)

let contentClassName = "card__content";
if (showBack) contentClassName += " card__content--back";

  return (
  <div className="card">
    <div className="card-container">
    <img
    src={image}
    className="card-container__image"/>
    <h2 className="card-container__heading">{name}</h2>
    <p className="card-container__description">{description}</p>
    <div className={contentClassName}>
    {showBack ? backContent : frontContent}
    </div>
    </div>
  </div>
  )
};

export default Card;
