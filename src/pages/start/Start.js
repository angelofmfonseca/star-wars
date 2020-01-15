import React from "react";

import "./Start.scss";
import logoStarWars from "../../assets/logo-star-wars.png";

const Start = () => {
  return (
    <>
      <div className="startArea">
        <img src={logoStarWars} alt="Star Wars game" className="startLogo" />
      </div>
    </>
  );
};

export default Start;
