import styled from "styled-components";

import colors from "../../styles/colors";

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  letter-spacing: -1px;
  width: 100%;
  color: ${props => (props.darker ? colors.primary : colors.secondary)};
  border-bottom: ${props =>
    props.hasBorder ? `2px solid ${colors.secondary}` : "none"};
`;
