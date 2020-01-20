import React from "react";

import "./Card.scss";
import frontCard from "../../assets/card-planeta-frente.png";

const Card = props => {
  return (
    <>
      <section className="cardContainer">
        <div className={`card ${props.isFlipped ? "isFlipped" : ""}`}>
          <div className="frontCard">
            <img src={frontCard} alt="random card" className="frontCard" />
          </div>
          <div className="backCard">
            <span className="cardInfo">Population: </span>
            <span className="cardInfo">Climate: </span>
            <span className="cardInfo">Terrain: </span>
            <span className="cardInfo">Featured in {} movies</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
