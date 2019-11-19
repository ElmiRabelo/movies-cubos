import React from "react";

import TitleContainer from "../title-container/title-container.component";
import CustomTitle from "../custom-title/custom-title.component";

import { Container } from "./header.styles";

const Header = () => (
  <Container>
    <TitleContainer padding="15px" position="center">
      <CustomTitle title="Movies" size="40px" />
    </TitleContainer>
  </Container>
);

export default Header;
