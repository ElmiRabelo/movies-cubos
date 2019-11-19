import styled from "styled-components";

import { NumberContainer } from "../custom-number/custom-number.styles";
import { Year } from "../release-year/release-year.styles";

import colors from "../../styles/colors";

export const Container = styled.div`
  max-height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${colors.greyLight};

  ${NumberContainer} {
    position: absolute;
    top: 35px;
    left: 15px;
    z-index: 9;
  }
`;

export const Header = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  padding: 25px 25px 10px 25px;
  background-color: ${colors.greyLight};
  position: relative;

  ${Year} {
    position: absolute;
    top: 0.1rem;
    left: 6rem;
  }
`;
