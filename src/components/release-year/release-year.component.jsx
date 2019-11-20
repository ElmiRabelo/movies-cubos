import React from "react";
import PropTypes from "prop-types";

import { formatYear } from "../../utils/movieUtils";
import { Year } from "./release-year.styles";

const ReleaseYear = ({ release_year }) => {
  return <Year>{formatYear(release_year)}</Year>;
};

ReleaseYear.propTypes = {
  release_year: PropTypes.string.isRequired
};

export default ReleaseYear;
