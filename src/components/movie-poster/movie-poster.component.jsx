import React from "react";
import PropTypes from "prop-types";

import { getImage } from "../../utils/imageUtils";

import { PosterContainer } from "./movie-poster.styles";

const MoviePoster = ({ posterUrl, posterSize, title }) => {
  return (
    <PosterContainer>
      <img src={getImage(posterSize, posterUrl)} alt={`${title} poster`} />
    </PosterContainer>
  );
};

MoviePoster.propTypes = {
  posterUrl: PropTypes.string.isRequired,
  posterSize: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default MoviePoster;
