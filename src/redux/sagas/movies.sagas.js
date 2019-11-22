import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as MoviesActions } from "../ducks/movies.ducks";
import { Creators as ErrorActions } from "../ducks/error.ducks";

export default function* getMovies(action) {
  try {
    const { inputValue, genreId } = action.payload;
    //busca filme por nome
    const responseSearch = yield call(
      api.get,
      `/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${inputValue}&language=pt-BR&region=br`
    );
    //busca filme por genero
    const responseGenre = yield call(
      api.get,
      `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genreId}`
    );

    const response = yield [
      ...responseGenre.data.results,
      ...responseSearch.data.results
    ];

    if (!response.length) throw "Sem resultados";

    yield put(MoviesActions.getMovieSuccess(response));
  } catch (err) {
    ErrorActions.setError("Algo deu errado na busca.");
  }
}
