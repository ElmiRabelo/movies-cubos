import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as MoviesActions } from "../ducks/movies.ducks";

export default function* getMovies(action) {
  try {
    const response = yield call(
      api.get,
      `/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${action.payload}&language=pt-BR&region=br`
    );
    yield put(MoviesActions.getMovieSuccess(response.data.results));
  } catch (err) {
    console.tron.log("Algo deu errado", err);
  }
}
