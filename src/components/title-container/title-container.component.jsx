import React from "react";
import PropTypes from "prop-types";

import { Container } from "./title-container.styles";

const TitleContainer = ({ padding, children, position, bgLight }) => {
  return (
    <Container padding={padding} position={position} bgLight={bgLight}>
      {children}
    </Container>
  );
};

TitleContainer.propTypes = {
  padding: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  bgLight: PropTypes.bool,
  children: PropTypes.element.isRequired
};

export default TitleContainer;
