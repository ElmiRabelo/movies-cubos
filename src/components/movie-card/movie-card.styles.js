import styled from "styled-components";

import { PosterContainer } from "../movie-poster/movie-poster.styles";

export const Container = styled.div`
  display: inline-grid;
  grid-template-columns: 200px auto;
  min-height: 300px;

  @media (max-width: 570px) {
    grid-template-columns: 1fr;
    ${PosterContainer} {
      display: none;
    }
  }
`;
