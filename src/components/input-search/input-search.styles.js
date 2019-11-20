import styled from "styled-components";

import colors from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 45px;
  margin: 25px 0;
  input {
    padding: 10px 25px;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background-color: ${colors.greyLight};

    &::placeholder {
      color: ${colors.primary};
    }
    &::-ms-input-placeholder {
      color: ${colors.primary};
    }
  }
`;
