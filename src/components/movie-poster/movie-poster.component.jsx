import React from "react";
import PropTypes from "prop-types";

import { getImage } from "../../utils/imageUtils";
import { Link } from "react-router-dom";

import { PosterContainer } from "./movie-poster.styles";

const MoviePoster = ({ posterUrl, posterSize, title, id }) => {
  return (
    <PosterContainer>
      <Link to={`/movie/${id}`}>
        <img src={getImage(posterSize, posterUrl)} alt={`${title} poster`} />
      </Link>
    </PosterContainer>
  );
};

MoviePoster.propTypes = {
  posterUrl: PropTypes.string.isRequired,
  posterSize: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default MoviePoster;
