import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import GenreLabel from "../genre-label/genre-label.component";

import { convertGenreIdToString } from "../../utils/movieUtils";
import { GenresContainer } from "./movie-genres.styles";

//responsavel por renderizar uma coleção de genre labels
const MovieGenres = ({ genre_ids, genres }) => (
  <GenresContainer>
    {genre_ids.map(id => (
      <GenreLabel key={id} genre={convertGenreIdToString(id, genres)} />
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
