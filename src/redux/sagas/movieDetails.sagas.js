import { call, put } from "redux-saga/effects";

import { Creators as MovieDetailsActions } from "../ducks/movieDetails.ducks";
import { Creators as ErrorActions } from "../ducks/error.ducks";

import api from "../../services/api";

export default function* getMovieDetails(action) {
  try {
    const response = yield call(
      api.get,
      `/movie/${action.payload}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=pt-BR&append_to_response=videos`
    );

    //dispara a açao para mandar o dados para o reducer
    yield put(MovieDetailsActions.getSuccess(response.data));
  } catch (err) {
    yield put(
      ErrorActions.setError(
        "Desculpe, algo deve ter acontecido na nave-mãe. Tente novamente, jovem padawan."
      )
    );
    yield put(MovieDetailsActions.getError());
  }
}
