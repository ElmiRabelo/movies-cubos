import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import GenreLabel from "../genre-label/genre-label.component";

import { convertGenreToString } from "../../utils/movieUtils";
import { GenresContainer } from "./movie-genres.styles";

const MovieGenres = ({ genre_ids, genres }) => (
  <GenresContainer>
    {genre_ids.map(id => (
      <GenreLabel key={id} genre={convertGenreToString(id, genres)} />
    ))}
  </GenresContainer>
);

MovieGenres.propTypes = {
  genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
  genres: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  genres: state.genres.data
});

export default connect(mapStateToProps)(MovieGenres);
