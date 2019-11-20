import { combineReducers } from "redux";

import movies from "./movies.ducks";
import genres from "./genres.ducks";

export default combineReducers({
  movies,
  genres
});
