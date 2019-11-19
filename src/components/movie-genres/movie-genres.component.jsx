import React from "react";
import PropTypes from "prop-types";

import GenreLabel from "../genre-label/genre-label.component";

import { Container } from "./movie-genres.styles";

const MovieGenres = () => (
  <Container>
    <GenreLabel genre="Ação" />
    <GenreLabel genre="Aventura" />
    <GenreLabel genre="Comédia" />
  </Container>
);

export default MovieGenres;
