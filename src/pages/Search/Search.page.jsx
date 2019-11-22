import React from "react";

import InputSearch from "../../components/input-search/input-search.component";
import MoviesOverview from "../../components/movies-overview/movies-overview.component";

import { Container } from "./Search.styles";

const Search = () => (
  <Container>
    <InputSearch placeholder="Busque um filme por nome, ou gênero..." />
    <MoviesOverview />
  </Container>
);

export default Search;
