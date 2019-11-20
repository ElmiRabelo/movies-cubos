import React from "react";

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
        />
      ))}
    </Container>
  );
};

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MoviesOverview);
