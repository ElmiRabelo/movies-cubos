import styled from "styled-components";

import { PosterContainer } from "../movie-poster/movie-poster.styles";

export const Container = styled.article`
  display: inline-grid;
  grid-template-columns: 200px auto;
  margin: 25px 0;

  ${PosterContainer} {
    img {
      height: auto;
      min-height: 100%;
    }
  }

  @media (max-width: 570px) {
    grid-template-columns: 1fr;
    ${PosterContainer} {
      display: none;
    }
  }
`;
