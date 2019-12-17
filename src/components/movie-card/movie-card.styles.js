import styled from "styled-components";

import { PosterContainer } from "../movie-poster/movie-poster.styles";
import { InformationContainer } from "../movie-information/movie-information.styles";

export const Container = styled.article`
  display: inline-grid;
  grid-template-columns: 200px auto;
  margin: 25px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.2);

  ${PosterContainer} {
    img {
      height: auto;
      min-height: 100%;
    }
  }

  @media (max-width: 570px) {
    grid-template-columns: 1fr;
    width: 80%;
    ${InformationContainer} {
      display: none;
    }
    ${PosterContainer} {
      img {
        height: auto;
        min-width: 100%;
      }
    }
  }
`;
