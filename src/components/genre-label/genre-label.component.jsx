import React from "react";
import PropTypes from "prop-types";

import { Container } from "./genre-label.styles";

const GenreLabel = ({ genre }) => (
  <Container>
    <p>{genre}</p>
  </Container>
);

GenreLabel.propTypes = {
  genre: PropTypes.string.isRequired
};

export default GenreLabel;
