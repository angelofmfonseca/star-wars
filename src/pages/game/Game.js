import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./Game.scss";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import { getPlanet } from "../../stores/actions/planet.actions";

class Game extends Component {
  state = {
    redirectToStart: false
  };

  goToStart = () => {
    this.setState({ redirectToStart: true });
  };

  componentDidMount() {
    this.props.getPlanet();
  }

  render() {
    if (this.state.redirectToStart) return <Redirect to={"/"} />;

    const { planet, isLoading } = this.props;

    return (
      <>
        <section className="gameArea">
          <Card planet={planet} isLoading={isLoading} />
          <Button
            title="Flip Card"
            width="300px"
            height="45px"
            marginTop="50px"
            borderRadius="3px"
            fontFamily="Avenir Next Condensed"
            fontSize="1.5rem"
            onClick={this.props.getPlanet}
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
    const planet =
      (state &&
        state.planet &&
        state.planet.success &&
        state.planet.success.results) ||
      {};
    const isLoading = state.planet.isLoading;
    const error = state.planet.error;
    return {
      planet,
      isLoading,
      error
    };
  },
  { getPlanet }
)(Game);
