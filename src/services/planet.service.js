import axios from "axios";

export const getPlanet = async () => {
  let idPlanet = Math.floor(Math.random() * 61 + 1);
  const response = await axios.get(`https://swapi.co/api/planets/${idPlanet}`);
  return response;
};
