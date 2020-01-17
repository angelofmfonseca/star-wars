import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./Game.scss";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";

class Game extends Component {
  state = {
    redirectToStart: false
  };

  goToStart = () => {
    this.setState({ redirectToStart: true });
  };

  render() {
    if (this.state.redirectToStart) return <Redirect to={"/"} />;

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
            onClick={this.goToStart}
          />
        </section>
      </>
    );
  }
}

export default Game;
