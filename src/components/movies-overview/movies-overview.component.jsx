import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PaginationActions } from "../../redux/ducks/pagination.ducks";

import MovieCard from "../movie-card/movie-card.component";
import Pagination from "../pagination/pagination.component";
import Loading from "../loading/loading.component";

import { Container } from "./movies-overview.styles";

const MoviesOverview = ({
  movies,
  pagination: { currentPage, moviesPerPage }
}) => {
  // //Obter card atual
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovie = movies.data.slice(indexOfFirstMovie, indexOfLastMovie);

  if (movies.loading) {
    return <Loading />;
  }
  return (
    <Container>
      {currentMovie.map(movie => (
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
      <Pagination totalMovies={movies.data.length} />
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
        first_air_date: PropTypes.string,
        genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired
      })
    ),
    loading: PropTypes.bool
  }).isRequired,
  pagination: PropTypes.shape({
    currentPage: PropTypes.number,
    moviesPerPage: PropTypes.number
  }).isRequired
};

const mapStateToProps = state => ({
  movies: state.movies,
  pagination: state.pagination
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PaginationActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesOverview);
