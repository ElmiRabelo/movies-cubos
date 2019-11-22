import { combineReducers } from "redux";

import movies from "./movies.ducks";
import genres from "./genres.ducks";
import pagination from "./pagination.ducks";
import movieDetails from "./movieDetails.ducks";

export default combineReducers({
  movies,
  movieDetails,
  genres,
  pagination
});
