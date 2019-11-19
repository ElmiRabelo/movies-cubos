import React from "react";
import PropTypes from "prop-types";

import MoviePoster from "../movie-poster/movie-poster.component";
import MovieInformation from "../movie-information/movie-information.component";

import { posterSizes } from "../../utils/imageUtils";

import { Container } from "./movie-card.styles";

const MovieCard = () => {
  return (
    <Container>
      <MoviePoster
        posterUrl="/bLpIFiuWF1bKnBqi7LqnJcLHtN.jpg"
        posterSize={posterSizes.medium}
        title="Thor"
      />
      <MovieInformation />
    </Container>
  );
};

MovieCard.propTypes = {};

export default MovieCard;
