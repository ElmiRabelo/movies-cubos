import React from "react";
import PropTypes from "prop-types";
//Redux and utils
import { connect } from "react-redux";
import { convertGenreIdToString } from "../../utils/movieUtils";
//Components and Styles
import GenreLabel from "../genre-label/genre-label.component";
import { GenresContainer } from "./movie-genres.styles";

//responsavel por renderizar uma coleção de genre labels
const MovieGenres = ({ genre_ids, genres }) => {
  const genre = genre_ids.map(id => convertGenreIdToString(id, genres));
  return (
    <GenresContainer>
      {genre.map(id => (
        <GenreLabel key={id} genre={id} />
      ))}
    </GenresContainer>
  );
};

MovieGenres.propTypes = {
  genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
  genres: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  genres: state.movies.genres
});

export default connect(mapStateToProps)(MovieGenres);
