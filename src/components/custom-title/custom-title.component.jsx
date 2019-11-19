import React from "react";
import PropTypes from "prop-types";

import { Title } from "./custom-title.styles";

const CustomTitle = ({ title, darker, size }) => (
  <Title size={size} darker={darker}>
    {title}
  </Title>
);

CustomTitle.propTypes = {
  title: PropTypes.string.isRequired,
  darker: PropTypes.bool,
  size: PropTypes.string.isRequired
};

export default CustomTitle;
