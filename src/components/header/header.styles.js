import styled from "styled-components";

import colors from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6%;
  min-height: 70px;
  width: 100%;
  padding: 15px 0;
  background-color: ${colors.primary};
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 300;
  color: ${colors.secondary};
`;
