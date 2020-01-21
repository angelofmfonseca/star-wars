import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import logoStarWars from "../../assets/logo-star-wars.png";
import "./Start.scss";
import Button from "../../components/button/Button";

class Start extends Component {
  state = {
    redirectToGame: false
  };

  goToGame = () => {
    this.setState({ redirectToGame: true });
  };

  render() {
    if (this.state.redirectToGame) return <Redirect to={"/game"} />;

    return (
      <>
        <section className="startArea">
          <img src={logoStarWars} alt="Star Wars game" className="startLogo" />
          <Button
            title="Start"
            width="300px"
            height="45px"
            marginTop="30px"
            borderRadius="3px"
            fontFamily="Avenir Next Condensed"
            fontSize="1.5rem"
            onClick={this.goToGame}
          />
        </section>
      </>
    );
  }
}

export default Start;
