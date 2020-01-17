import React from "react";

import logoStarWars from "../../assets/logo-star-wars.png";
import "./Start.scss";
import Button from "../../components/button/Button";

const Start = () => {
  return (
    <>
      <div className="startArea">
        <img src={logoStarWars} alt="Star Wars game" className="startLogo" />
        <Button
          title="Start"
          width="300px"
          height="45px"
          marginTop="50px"
          borderRadius="3px"
          fontFamily="Avenir Next Condensed"
          fontSize="1.5rem"
        />
      </div>
    </>
  );
};

export default Start;
