import styled from "styled-components";

import { NumberContainer } from "../custom-number/custom-number.styles";
import { GenresContainer } from "../movie-genres/movie-genres.styles";

import colors from "../../styles/colors";

export const MovieContainer = styled.main`
  /* max-height: 572px; */
  min-width: 100%;
  background-color: ${colors.white};
  margin-bottom: 38px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;
  padding: 15px 38px;
  background-color: ${colors.grey};
  h1 {
    font-size: 26px;
    @media screen and (min-width: 450px) {
      font-size: 36px;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${colors.light};

  h1 {
    font-size: 24px;
  }

  @media screen and (min-width: 900px) {
    flex-direction: row;
  }
`;

export const InformationContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 38px;

  article {
    width: 100%;
    margin-top: 25px;
    padding-right: 10px;
  }

  @media screen and (min-width: 900px) {
    min-width: 73%;
    max-width: 685px;
  }
`;

export const ImageContainer = styled.aside`
  display: none;
  width: 27%;
  div {
    height: 100%;
    img {
      height: auto;
      min-height: 100%;
    }
  }
  @media screen and (min-width: 900px) {
    display: block;
  }
`;

export const ExtraContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${GenresContainer} {
    justify-content: center;
  }
  ${NumberContainer} {
    align-self: center;
    margin: 15px;
    height: 110px;
    min-width: 110px;
    padding: 6px;
    div {
      border-width: 6px;
    }
    p {
      font-size: 38px;
    }

    div {
      border-width: 3px;
    }
    p {
      font-size: 38px;
    }
  }

  @media screen and (min-width: 900px) {
    justify-content: space-between;
    margin: 25px 0;
    ${GenresContainer} {
      align-items: flex-start;
      justify-content: flex-start;
    }
    ${NumberContainer} {
      margin: none;
      align-self: flex-end;
      width: 110px;
      padding: 6px;
      div {
        border-width: 6px;
      }
      p {
        font-size: 38px;
      }
    }
  }
`;
