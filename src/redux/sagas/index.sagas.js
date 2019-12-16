import { all, takeLatest } from "redux-saga/effects";

import { Types as MoviesTypes } from "../ducks/movies.ducks";
import { Types as MovieDetailsTypes } from "../ducks/movieDetails.ducks";

import getMovies from "./movies.sagas";
import getMovieDetails from "./movieDetails.sagas";

export default function* rootSaga() {
  yield all([
    takeLatest(MoviesTypes.GET_MOVIE_REQUEST, getMovies),
    takeLatest(MovieDetailsTypes.GET_REQUEST, getMovieDetails)
  ]);
}
