import { all, takeLatest } from "redux-saga/effects";

import { Types as MoviesTypes } from "../ducks/movies.ducks";
import getMovies from "./movies.sagas";

export default function* rootSaga() {
  yield all([takeLatest(MoviesTypes.GET_MOVIE_REQUEST, getMovies)]);
}
