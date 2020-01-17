import React from "react";
import PropTypes from "prop-types";
import { formatVote } from "../../utils/movieUtils";
import { NumberContainer, ContentContainer } from "./custom-number.styles";

const CustomNumber = ({ number, onClick, isVote }) => {
  return (
    <NumberContainer onClick={onClick}>
      <ContentContainer>
        <p>{isVote ? formatVote(number) : number}</p>
      </ContentContainer>
    </NumberContainer>
  );
};

CustomNumber.propTypes = {
  number: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  isVote: PropTypes.bool
};
export default CustomNumber;
