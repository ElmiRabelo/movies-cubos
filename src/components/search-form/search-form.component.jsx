import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MoviesActions } from "../../redux/ducks/movies.ducks";
import { Creators as ErrorActions } from "../../redux/ducks/error.ducks";

import { convertSearchToGenre } from "../../utils/movieUtils";

import { Container } from "./search-form.styles";

//renderiza o input de busca e é resposavel por fazer o request
const SearchForm = ({ placeholder, getMovieRequest, genres, setError }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!inputValue) {
      return setError(
        "É necessário digitar o nome de um filme, ou gênero, jovem padawan."
      );
    }
    //converte o valor de input para um genero e retorna a id desse genero, se for um genero valido.
    const genreId = convertSearchToGenre(inputValue, genres);
    getMovieRequest({ inputValue, genreId });
    setInputValue("");
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </form>
    </Container>
  );
};

SearchForm.propTypes = {
  placeholder: PropTypes.string.isRequired,
  getMovieRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  genres: state.movies.genres
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...MoviesActions, ...ErrorActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
