import styled from "styled-components";

import colors from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 45px;
  margin: 25px 0;
  input {
    padding: 15px 25px;
    width: 100%;
    height: 100%;
    font-family: "Abel", sans-serif;
    font-size: 16px;
    border-radius: 25px;
    background-color: ${colors.greyLight};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);

    &::placeholder {
      color: ${colors.placeholder};
    }
    &::-ms-input-placeholder {
      color: ${colors.placeholder};
    }
  }
`;
