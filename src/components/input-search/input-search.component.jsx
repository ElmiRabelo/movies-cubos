import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MoviesActions } from "../../redux/ducks/movies.ducks";
import { Creators as GenresActions } from "../../redux/ducks/genres.ducks";

import { convertSearchToGenre } from "../../utils/movieUtils";

import { Container } from "./input-search.styles";

//renderiza o input de busca e é resposavel por fazer o request
const InputSearch = ({ placeholder, getMovieRequest, genres, getRequest }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!inputValue) return;
    getRequest();
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

InputSearch.propTypes = {
  placeholder: PropTypes.string.isRequired,
  getMovieRequest: PropTypes.func.isRequired,
  getRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies,
  genres: state.genres.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...MoviesActions, ...GenresActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(InputSearch);
