export const Types = {
  GET_MOVIE_REQUEST: "movies/GET_MOVIE_REQUEST",
  GET_MOVIE_SUCCESS: "movies/GET_MOVIE_SUCCESS",
  GET_ERROR: "movies/GET_ERROR"
};

const INITITAL_STATE = {
  data: [],
  genres: [],
  loading: false
};

export default function movies(state = INITITAL_STATE, action) {
  switch (action.type) {
    case Types.GET_MOVIE_REQUEST:
      return { ...state, loading: true };
    case Types.GET_MOVIE_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case Types.GET_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  getMovieRequest: payload => ({ type: Types.GET_MOVIE_REQUEST, payload }),
  getMovieSuccess: payload => ({ type: Types.GET_MOVIE_SUCCESS, payload }),
  getError: () => ({ type: Types.GET_ERROR })
};
