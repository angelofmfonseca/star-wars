import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Start from "./pages/start/Start";
import Game from "./pages/game/Game";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/game" component={Game} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
