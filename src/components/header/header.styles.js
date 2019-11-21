import styled from "styled-components";

import colors from "../../styles/colors";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  min-height: 70px;
  width: 100%;
  background-color: ${colors.primary};
  h1 {
    text-align: center;
    font-size: 40px;
  }
`;
