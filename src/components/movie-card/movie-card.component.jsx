import React from "react";
import PropTypes from "prop-types";

import MoviePoster from "../movie-poster/movie-poster.component";
import MovieInformation from "../movie-information/movie-information.component";

import { posterSizes } from "../../utils/imageUtils";

import { Container } from "./movie-card.styles";

const MovieCard = ({
  id,
  title,
  poster_path,
  overview,
  vote_average,
  release_date
}) => {
  return (
    <Container id={id}>
      <MoviePoster
        posterUrl={poster_path}
        posterSize={posterSizes.medium}
        title={title}
      />
      <MovieInformation
        title={title}
        overview={overview}
        release_date={release_date}
        vote_average={vote_average}
      />
    </Container>
  );
};

MovieCard.propTypes = {};

export default MovieCard;
