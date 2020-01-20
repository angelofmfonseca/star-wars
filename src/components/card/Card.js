import React from "react";

import "./Card.scss";
import frontCard from "../../assets/card-planeta-frente.png";
import backCard from "../../assets/star-wars-jogo-header-card.png";

const Card = props => {
  return (
    <>
      <section className="cardContainer">
        <div className="card">
          <div className="frontCard">
            <img src={frontCard} alt="random card" className="frontCard" />
          </div>
          <div className="backCard">
            <img src={backCard} alt="flipped card" className="frontCard" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
