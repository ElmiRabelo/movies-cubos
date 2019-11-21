import styled from "styled-components";

import colors from "../../styles/colors";

export const Container = styled.section`
  height: 24vh;
  min-width: 100%;
  background-color: ${colors.light};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;
  padding: 15px;
  background-color: ${colors.grey};
  h1 {
    font-size: 36px;
  }
`;
