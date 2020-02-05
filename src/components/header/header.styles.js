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
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
  h1 {
    text-align: center;
    font-size: 40px;
  }
`;
