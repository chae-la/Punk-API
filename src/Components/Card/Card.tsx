import { useState } from "react";
import "./Card.scss";
import Button from "../Button/Button";
import cross from "../../assets/images/black-cross.png";

type CardProps = {
  name: string;
  description: string;
  image: string;
  food_pairing: string[];
  brewer_tips: string;
  abv: number;
  firstBrewed: string;
  acid: number;
};

const Card = ({
  name,
  description,
  image,
  food_pairing,
  brewer_tips,
  abv,
  firstBrewed,
  acid,
}: CardProps) => {
  const [showBack, setShowBack] = useState<boolean>(false);
  const handleClick = () => {
    setShowBack(!showBack);
  };

  const frontContent = (
    <div onClick={handleClick}>
      <Button label="More..." />
    </div>
  );

  const backContent = (
    <>
      <img
        src={cross}
        className="card__cross"
        onClick={handleClick}
        alt="Close Text"
      />
      <h3>Pairs well with... </h3>
      <ul className="card__content card__content--back-pairs">
        {food_pairing.map((pairing, index) => (
          <li key={index}>{pairing}</li>
        ))}
      </ul>
      <h3>Brewer's Tip</h3>
      <p className="card__content card__content--back-tip">{brewer_tips}</p>
    </>
  );

  let contentClassName = "card__content";
  if (showBack) contentClassName += " card__content--back";

  return (
    <div className="card">
      <div className="card-container">
        <img src={image} className="card-container__image" />
        <h2 className="card-container__heading">{name}</h2>
        <p className="card-container__description">{description}</p>
        <p className="card-container__info card-container__info--abv">
          ABV: {abv}%
        </p>
        <p className="card-container__info card-container__info--first-brewed">
          First Brewed: {firstBrewed}
        </p>
        <p className="card-container__info card-container__info--acid">
          Acidity: {acid ?? "N/A"}
        </p>
        <div className={contentClassName}>
          {showBack ? backContent : frontContent}
        </div>
      </div>
    </div>
  );
};

export default Card;
