import React from "react";

import SearchForm from "../../components/search-form/search-form.component";
import MoviesOverview from "../../components/movies-overview/movies-overview.component";

import { Container } from "./Search.styles";

const Search = () => (
  <Container>
    <SearchForm placeholder="Busque um filme por nome, ou gênero..." />
    <MoviesOverview />
  </Container>
);

export default Search;
