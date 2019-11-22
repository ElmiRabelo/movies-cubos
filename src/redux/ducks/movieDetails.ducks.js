export const Types = {
  GET_REQUEST: "movieDetails/GET_REQUEST",
  GET_SUCCESS: "movieDetails/GET_SUCCESS",
  GET_ERROR: "movieDetails/GET_ERROR"
};

const INITIAL_STATE = {
  data: [],
  loading: true
};

export default function movieDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    default:
      return state;
  }
}

export const Creators = {
  getRequest: payload => ({ type: Types.GET_REQUEST, payload }),
  getSuccess: payload => ({ type: Types.GET_SUCCESS, payload }),
  getError: () => ({ type: Types.GET_ERROR })
};
