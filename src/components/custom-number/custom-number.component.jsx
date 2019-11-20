import React from "react";
import PropTypes from "prop-types";

import { formatVote } from "../../utils/movieUtils";
import { NumberContainer, ContentContainer } from "./custom-number.styles";

const CustomNumber = ({ number, isVote }) => {
  return (
    <NumberContainer>
      <ContentContainer>
        <p>{isVote ? formatVote(number) : number}</p>
      </ContentContainer>
    </NumberContainer>
  );
};

CustomNumber.propTypes = {
  number: PropTypes.number.isRequired,
  isVote: PropTypes.bool
};
export default CustomNumber;
