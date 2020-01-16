import React from "react";
import PropTypes from "prop-types";
//Redux and utils
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MoviesActions } from "../../redux/ducks/movies.ducks";
import { Creators as ErrorActions } from "../../redux/ducks/error.ducks";
import { convertSearchToGenre } from "../../utils/movieUtils";
//components and styles
import SearchForm from "../../components/search-form/search-form.component";
import MoviesOverview from "../../components/movies-overview/movies-overview.component";
import { Container } from "./Search.styles";

const Search = ({ getMovieRequest, genres, setError }) => {
  const submitHandler = inputValue => {
    if (!inputValue) {
      return setError(
        "É necessário digitar o nome de um filme, ou gênero, jovem padawan."
      );
    }
    //converte o valor de input para um genero e retorna a id desse genero, se for um genero valido.
    const genreId = convertSearchToGenre(inputValue, genres);
    getMovieRequest({ inputValue, genreId });
  };
  return (
    <Container>
      <SearchForm
        placeholder="Busque um filme por nome, ou gênero..."
        submitHandler={submitHandler}
      />
      <MoviesOverview />
    </Container>
  );
};

Search.propTypes = {
  getMovieRequest: PropTypes.func.isRequired,
  genres: PropTypes.array.isRequired,
  setError: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  genres: state.movies.genres
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...MoviesActions, ...ErrorActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
