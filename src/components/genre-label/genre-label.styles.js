import styled from "styled-components";

import colors from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 26px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid ${colors.primary};
  border-radius: 15px;
  margin-right: 10px;
  background-color: ${colors.secondary};
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  p {
    color: ${colors.primary};
  }
`;
