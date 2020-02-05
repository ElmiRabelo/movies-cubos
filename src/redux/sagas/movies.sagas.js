import { all, call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as MoviesActions } from "../ducks/movies.ducks";
import { Creators as ErrorActions } from "../ducks/error.ducks";

export default function* getMovies(action) {
  try {
    const { inputValue, genreId } = action.payload;

    const [byTitle, byGenre] = yield all([
      call(
        api.get,
        `/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${inputValue}&language=pt-BR&region=br`
      ),
      call(
        api.get,
        `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genreId}`
      )
    ]);

    const response = yield [...byGenre.data.results, ...byTitle.data.results];

    yield put(MoviesActions.getMovieSuccess(response));
  } catch (err) {
    yield put(
      ErrorActions.setError(
        "Desculpe, algo deve ter acontecido na nave-mãe. Tente novamente, jovem padawan."
      )
    );
    yield put(MoviesActions.getError());
  }
}
