import React from "react";
import PropTypes from "prop-types";

import { Container } from "./title-container.styles";

const TitleContainer = ({ height, padding, children, position, bgLight }) => {
  return (
    <Container
      height={height}
      padding={padding}
      position={position}
      bgLight={bgLight}
    >
      {children}
    </Container>
  );
};

TitleContainer.propTypes = {
  height: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  bgLight: PropTypes.bool,
  children: PropTypes.element.isRequired
};

export default TitleContainer;
