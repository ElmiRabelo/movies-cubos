import React from "react";
import PropTypes from "prop-types";

import { Sinopse } from "./movie-sinopse.styles";

const MovieSinopse = ({ overview }) => <Sinopse>{overview}</Sinopse>;

MovieSinopse.propTypes = {
  overview: PropTypes.string.isRequired
};

export default MovieSinopse;
