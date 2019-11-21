import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 50px 0;
`;
export const Spinner = styled.img`
  animation: ${rotate360} 2s linear infinite;
  width: 100px;
  object-fit: cover;
`;
