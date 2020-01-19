import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import planet from "./reducers/planet.reducers";

const combine = combineReducers({
  planet
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combine, composeEnhancers(applyMiddleware(thunk)));

export default store;
