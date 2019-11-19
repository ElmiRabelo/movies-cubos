import styled from "styled-components";

import colors from "../../styles/colors";

export const Container = styled.div`
  height: ${props => props.width};
  max-width: ${props => props.width};
  border-radius: 50%;
  background-color: ${colors.primary};
  padding: 2px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid ${colors.secondary};
  p {
    color: ${colors.secondary};
    font-size: ${props => props.textSize};
  }
`;
