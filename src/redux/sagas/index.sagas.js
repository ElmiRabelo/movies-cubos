import { all, takeLatest } from "redux-saga/effects";

import { Types as MoviesTypes } from "../ducks/movies.ducks";
import { Types as GenresTypes } from "../ducks/genres.ducks";

import getMovies from "./movies.sagas";
import getGenres from "./genres.sagas";

export default function* rootSaga() {
  yield all([
    takeLatest(MoviesTypes.GET_MOVIE_REQUEST, getMovies),
    takeLatest(GenresTypes.GET_REQUEST, getGenres)
  ]);
}
