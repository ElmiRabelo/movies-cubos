import React from "react";
import PropTypes from "prop-types";

import MoviePoster from "../movie-poster/movie-poster.component";
import MovieInformation from "../movie-information/movie-information.component";

import { posterSizes } from "../../utils/imageUtils";

import { Container } from "./movie-card.styles";

const MovieCard = ({
  movie: {
    id,
    title,
    poster_path,
    overview,
    vote_average,
    release_date,
    genre_ids
  }
}) => {
  return (
    <Container id={id}>
      <MoviePoster
        posterUrl={poster_path}
        posterSize={posterSizes.medium}
        title={title}
        id={id}
      />
      <MovieInformation
        id={id}
        title={title}
        overview={overview}
        release_date={release_date}
        vote_average={vote_average}
        genre_ids={genre_ids}
      />
    </Container>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genre_ids: PropTypes.arrayOf(PropTypes.number)
  })
};

export default MovieCard;
