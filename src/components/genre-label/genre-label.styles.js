import styled from "styled-components";

import colors from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 26px;
  padding: 10px;
  border: 1px solid ${colors.primary};
  border-radius: 15px;
  margin-right: 10px;

  p {
    color: ${colors.primary};
  }
`;
