import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { FormatVote } from "../../utils/movieUtils";
import { NumberContainer, ContentContainer } from "./custom-number.styles";

const CustomNumber = ({ number, textSize, width, isVote }) => {
  return (
    <NumberContainer width={width}>
      <ContentContainer textSize={textSize}>
        <p>{isVote ? FormatVote(number) : number}</p>
      </ContentContainer>
    </NumberContainer>
  );
};

CustomNumber.propTypes = {
  number: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
  textSize: PropTypes.string.isRequired,
  isVote: PropTypes.bool
};
export default CustomNumber;
