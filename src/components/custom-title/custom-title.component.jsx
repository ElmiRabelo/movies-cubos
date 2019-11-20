import React from "react";
import PropTypes from "prop-types";

import { Title } from "./custom-title.styles";

const CustomTitle = ({ title, darker, fontSize }) => (
  <Title darker={darker} fontSize={fontSize}>
    {title}
  </Title>
);

CustomTitle.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  darker: PropTypes.bool
};

export default CustomTitle;
