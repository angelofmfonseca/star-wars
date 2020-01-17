const INITIAL_STATE = {
  data: [],
  isLoading: false,
  success: "",
  error: false
};

const getPlanet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "REQUEST_GET_PLANET":
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case "SUCCESS_GET_PLANET":
      return {
        ...state,
        isLoading: false,
        success: action.payload
      };
    case "ERROR_GET_PLANET":
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default getPlanet;
