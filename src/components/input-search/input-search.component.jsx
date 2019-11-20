import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MoviesActions } from "../../redux/ducks/movies.ducks";

import { Container } from "./input-search.styles";

const InputSearch = ({ placeholder, getMovieRequest }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    getMovieRequest(inputValue);
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
  placeholder: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MoviesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(InputSearch);
