export const Types = {
  GET_MOVIE_REQUEST: "movies/GET_MOVIE_REQUEST",
  GET_MOVIE_SUCCESS: "movies/GET_MOVIE_SUCCESS",
  GET_ERROR: "movies/GET_ERROR"
};

const INITITAL_STATE = {
  data: [],
  genres: [
    {
      id: 28,
      name: "Ação"
    },
    {
      id: 12,
      name: "Aventura"
    },
    {
      id: 16,
      name: "Animação"
    },
    {
      id: 35,
      name: "Comédia"
    },
    {
      id: 80,
      name: "Crime"
    },
    {
      id: 99,
      name: "Documentário"
    },
    {
      id: 18,
      name: "Drama"
    },
    {
      id: 10751,
      name: "Família"
    },
    {
      id: 14,
      name: "Fantasia"
    },
    {
      id: 36,
      name: "História"
    },
    {
      id: 27,
      name: "Terror"
    },
    {
      id: 10402,
      name: "Música"
    },
    {
      id: 9648,
      name: "Mistério"
    },
    {
      id: 10749,
      name: "Romance"
    },
    {
      id: 878,
      name: "Ficção científica"
    },
    {
      id: 10770,
      name: "Cinema TV"
    },
    {
      id: 53,
      name: "Thriller"
    },
    {
      id: 10752,
      name: "Guerra"
    },
    {
      id: 37,
      name: "Faroeste"
    }
  ],
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
