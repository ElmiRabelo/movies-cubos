import React from "react";
import PropTypes from "prop-types";
//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PaginationActions } from "../../redux/ducks/pagination.ducks";
//Components and Styles
import MovieCard from "../movie-card/movie-card.component";
import Pagination from "../pagination/pagination.component";
import Loading from "../loading/loading.component";
import { Container } from "./movies-overview.styles";

//reneriza os MovieCards em conjunto com a paginação dos resultados;
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
        <MovieCard key={movie.id} movie={movie} />
      ))}
      <Pagination totalMovies={movies.data.length} />
    </Container>
  );
};

MoviesOverview.propTypes = {
  movies: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number
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
