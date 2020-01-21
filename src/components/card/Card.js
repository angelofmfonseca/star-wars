import React from "react";

import "./Card.scss";
import frontCard from "../../assets/card-planeta-frente.png";

const Card = props => {
  const { planets, isFlipped } = props;
  return (
    <>
      <section className="cardContainer">
        <div className={`card ${isFlipped ? "isFlipped" : ""}`}>
          <div className="frontCard">
            <img src={frontCard} alt="random card" className="frontCard" />
          </div>
          <div className="backCard">
            <span className="cardTitle">{planets.name}</span>
            <span className="cardInfo">Population: {planets.population}</span>
            <span className="cardInfo">Climate: {planets.climate}</span>
            <span className="cardInfo">Terrain: {planets.terrain}</span>
            <span className="cardInfo">
              Featured in {planets && planets.films && planets.films.length}{" "}
              movies
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
