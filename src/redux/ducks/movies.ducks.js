export const Types = {
  GET_MOVIE_REQUEST: "movies/GET_MOVIE_REQUEST",
  GET_MOVIE_SUCCESS: "movies/GET_MOVIE_SUCCESS",
  GET_GENRES_REQUEST: "movies/GET_GENRES_REQUEST",
  GET_SUCCESS_REQUEST: "movies/GET_GENRES_SUCCESS"
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
    default:
      return state;
  }
}

export const Creators = {
  getMovieRequest: payload => ({ type: Types.GET_MOVIE_REQUEST, payload }),
  getMovieSuccess: payload => ({ type: Types.GET_MOVIE_SUCCESS, payload }),
  getGenresRequest: payload => ({ type: Types.GET_GENRES_REQUEST, payload }),
  getGenresSuccess: payload => ({ type: Types.GET_GENRES_SUCCESS, payload })
};
