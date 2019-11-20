import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import MovieCard from "../movie-card/movie-card.component";

import { Container } from "./movies-overview.styles";

const MoviesOverview = ({ movies }) => {
  return (
    <Container>
      {movies.data.map(movie => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          overview={movie.overview}
          vote_average={movie.vote_average}
          release_date={movie.release_date}
          genre_ids={movie.genre_ids}
        />
      ))}
    </Container>
  );
};

MoviesOverview.propTypes = {
  movies: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        poster_path: PropTypes.string,
        overview: PropTypes.string,
        vote_average: PropTypes.number,
        title: PropTypes.string,
        release_date: PropTypes.string,
        first_air_date: PropTypes.string
      })
    ),
    loading: PropTypes.bool
  }).isRequired
};

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MoviesOverview);
