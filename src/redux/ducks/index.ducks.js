import { combineReducers } from "redux";

import movies from "./movies.ducks";
import pagination from "./pagination.ducks";
import movieDetails from "./movieDetails.ducks";
import error from "./error.ducks";

export default combineReducers({
  movies,
  movieDetails,
  pagination,
  error
});
