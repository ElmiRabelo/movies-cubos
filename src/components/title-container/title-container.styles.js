import styled from "styled-components";

import colors from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: ${props => props.position};
  align-items: center;
  min-height: ${props => props.height};
  width: 100%;
  padding: ${props => props.padding};
  background-color: ${props => (props.bgLight ? colors.grey : colors.primary)};
`;