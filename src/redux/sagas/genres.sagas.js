import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as GenresActions } from "../ducks/genres.ducks";
import { Creators as ErrorActions } from "../ducks/error.ducks";

export default function* getGenres() {
  try {
    const response = yield call(
      api.get,
      `/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=pt-BR`
    );
    yield put(GenresActions.getSuccess(response.data.genres));
  } catch (err) {
    yield put(
      ErrorActions.setError(
        "Desculpe, algo deve ter acontecido na nave-mãe. Tente novamente, jovem padawan."
      )
    );
    yield put(GenresActions.getError());
  }
}
