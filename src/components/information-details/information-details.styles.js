import styled from "styled-components";

export const Container = styled.div`
  min-width: 100%;
  background-color: inherit;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  margin: 25px 0;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 25px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  h1 {
    font-size: 21px;
    text-align: center;
  }
  p {
    text-align: center;
  }
`;
