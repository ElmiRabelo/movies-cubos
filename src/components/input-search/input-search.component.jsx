import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MoviesActions } from "../../redux/ducks/movies.ducks";

import { convertSearchToGenre } from "../../utils/movieUtils";

import { Container } from "./input-search.styles";

const InputSearch = ({ placeholder, getMovieRequest, genres }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
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
  getMovieRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies,
  genres: state.genres.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MoviesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(InputSearch);
