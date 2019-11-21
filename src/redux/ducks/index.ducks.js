import { combineReducers } from "redux";

import movies from "./movies.ducks";
import genres from "./genres.ducks";
import pagination from "./pagination.ducks";

export default combineReducers({
  movies,
  genres,
  pagination
});
