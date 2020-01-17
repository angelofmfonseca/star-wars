import * as Service from "../../services/planet.service";

const requestGetPlanet = () => ({
  type: "REQUEST_GET_PLANET"
});

const successGetPlanet = payload => ({
  type: "SUCCESS_GET_PLANET",
  payload
});

const errorGetPlanet = error => ({
  type: "ERROR_GET_PLANET",
  error
});

export const getPlanet = () => async dispatch => {
  dispatch(requestGetPlanet());
  try {
    const response = await Service.getPlanet();
    dispatch(successGetPlanet(response.data));
    return response.data;
  } catch (err) {
    dispatch(errorGetPlanet(err));
    return;
  }
};
