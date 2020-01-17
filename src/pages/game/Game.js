import React from "react";

import "./Game.scss";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";

const Game = () => {
  return (
    <>
      <section className="gameArea">
        <Card />
        <Button
          title="Flip Another Card"
          width="300px"
          height="45px"
          marginTop="50px"
          borderRadius="3px"
          fontFamily="Avenir Next Condensed"
          fontSize="1.5rem"
        />
        <Button
          title="Exit"
          width="300px"
          height="45px"
          marginTop="30px"
          borderRadius="3px"
          fontFamily="Avenir Next Condensed"
          fontSize="1.5rem"
        />
      </section>
    </>
  );
};

export default Game;
