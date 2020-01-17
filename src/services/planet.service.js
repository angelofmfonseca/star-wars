import axios from "axios";

export const getPlanet = async () => {
  const response = await axios.get("https://swapi.co/api/planets");
  return response;
};
