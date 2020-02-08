import styled from "styled-components";

import colors from "../../styles/colors";

export const Container = styled.header`
  display: flex;
  line-height: 1;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  min-height: 70px;
  width: 100%;
  border-bottom: 1px solid ${colors.primary};
  background-color: ${colors.secondary};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
  h1 {
    text-align: center;
    font-size: 2.1rem;
    color: ${colors.primary};
    letter-spacing: 0.2rem;
    padding-bottom: 0;
    -webkit-font-smoothing: antialiased;
    transform: translateX(10px);
    transition-duration: 0.3s;
    &:hover {
      transform: translateX(0);
    }
  }

  nav {
    a,
    a:visited,
    a:active {
      font-size: 23px;
      color: ${colors.dark};
      transition-duration: 0.3s;
      &:hover {
        letter-spacing: 0.1rem;
        color: ${colors.placeholder};
      }
    }
  }
`;
