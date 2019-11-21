import styled from "styled-components";

export const Container = styled.div`
  height: 24vh;
  min-width: 100%;
  background-color: inherit;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 21px;
    text-align: center;
  }
  p {
    margin: 10px 0;
    text-align: center;
  }
`;
