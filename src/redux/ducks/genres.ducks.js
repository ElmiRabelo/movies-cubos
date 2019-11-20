export const Types = {
  GET_REQUEST: "genres/GET_REQUEST",
  GET_SUCCESS: "genres/GET_SUCCESS"
};

const INITIAL_STATE = {
  data: [
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

export default function genres(state = INITIAL_STATE, action) {
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
  getRequest: () => ({ type: Types.GET_REQUEST }),
  getSuccess: payload => ({ type: Types.GET_SUCCESS, payload })
};
