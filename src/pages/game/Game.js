import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./Game.scss";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import { getPlanet } from "../../stores/actions/planet.actions";

class Game extends Component {
  state = {
    redirectToStart: false,
    cardIsFlipped: false
  };

  goToStart = () => {
    this.setState({ redirectToStart: true });
  };

  flipCard = () => {
    this.setState({ cardIsFlipped: !this.state.cardIsFlipped });
  };

  componentDidMount() {
    this.props.getPlanet();
  }

  render() {
    if (this.state.redirectToStart) return <Redirect to={"/"} />;

    const { planets, isLoading } = this.props;
    const { cardIsFlipped } = this.state;

    return (
      <>
        <section className="gameArea">
          <Card
            planets={planets}
            isLoading={isLoading}
            isFlipped={cardIsFlipped}
          />
          <Button
            title="Flip Another Card"
            width="300px"
            height="45px"
            marginTop="50px"
            borderRadius="3px"
            fontFamily="Avenir Next Condensed"
            fontSize="1.5rem"
            onClick={this.flipCard}
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

export default connect(
  state => {
    const planets =
      (state &&
        state.planet &&
        state.planet.success &&
        state.planet.success.results) ||
      {};
    const isLoading = state.planet.isLoading;
    const error = state.planet.error;
    return {
      planets,
      isLoading,
      error
    };
  },
  { getPlanet }
)(Game);
