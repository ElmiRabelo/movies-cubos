import styled from "styled-components";

import { NumberContainer } from "../custom-number/custom-number.styles";

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  ${NumberContainer} {
    width: 50px;
    height: 50px;
    margin: 0 10px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const PageNumber = styled.div`
  font-size: 24px;
  margin: 0 10px;
  &:hover {
    cursor: pointer;
  }
`;
