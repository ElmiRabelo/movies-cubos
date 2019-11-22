import React from "react";
import { Switch, Route } from "react-router-dom";

import Search from "../pages/Search/Search.page";
import MoviesDetails from "../pages/MovieDetails/MovieDetails.page";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Search} />
    <Route exact path="/movie/:id" component={MoviesDetails} />
  </Switch>
);

export default Routes;
