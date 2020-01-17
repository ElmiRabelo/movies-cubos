import React from "react";
import PropTypes from "prop-types";
import { Title } from "./custom-title.styles";

const CustomTitle = ({ title, darker, hasBorder }) => (
  <Title darker={darker} hasBorder={hasBorder}>
    {title}
  </Title>
);

CustomTitle.propTypes = {
  title: PropTypes.string.isRequired,
  darker: PropTypes.bool,
  hasBorder: PropTypes.bool
};

export default CustomTitle;
