import styled from "styled-components";

import colors from "../../styles/colors";

export const Title = styled.h1`
  font-size: ${props => props.fontSize};
  font-weight: 300;
  color: ${props => (props.darker ? colors.primary : colors.secondary)};
`;
