import styled from "styled-components";

import { NumberContainer } from "../custom-number/custom-number.styles";
import { Year } from "../release-year/release-year.styles";

import colors from "../../styles/colors";

export const Container = styled.div`
  max-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${colors.greyLight};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 15px;
  background-color: ${colors.primary};
  h1 {
    font-size: 24px;
    padding-bottom: 0;
  }

  ${NumberContainer} {
    width: 45px;
    height: 45px;
    p {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 900px) {
    padding: 1.9rem 0 0.2rem 6rem;
    align-items: flex-end;
    h1 {
      font-size: 35px;
    }

    ${NumberContainer} {
      position: absolute;
      top: 38px;
      left: 15px;
      z-index: 9;
      width: 70px;
      height: 70px;
      p {
        font-size: 24px;
      }
    }
  }
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
