import React from "react";
import PropTypes from "prop-types";

import { Container, ContentContainer } from "./custom-number.styles";

const CustomNumber = ({ number, textSize, width, isVote }) => {
  //Formata o vote_average da Api para uma string com % no final
  const voteFormat = vote => {
    const voteFormated = vote.toString().replace(".", "") + "%";
    return voteFormated;
  };

  return (
    <Container width={width}>
      <ContentContainer textSize={textSize}>
        <p>{isVote ? voteFormat(number) : number}</p>
      </ContentContainer>
    </Container>
  );
};

CustomNumber.propTypes = {
  number: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
  textSize: PropTypes.string.isRequired,
  isVote: PropTypes.bool
};
export default CustomNumber;
