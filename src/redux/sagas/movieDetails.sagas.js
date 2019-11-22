import { call, put } from "redux-saga/effects";

import { Creators as MovieDetailsActions } from "../ducks/movieDetails.ducks";

import api from "../../services/api";

export default function* getMovieDetails(action) {
  try {
    const response = yield call(
      api.get,
      `/movie/${action.payload}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=pt-BR&append_to_response=videos`
    );

    yield put(MovieDetailsActions.getSuccess(response.data));
  } catch (err) {
    console.tron.log("algo deu errado", err);
  }
}
