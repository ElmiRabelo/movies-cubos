import React from "react";

import CustomTitle from "../custom-title/custom-title.component";

import { Container } from "./header.styles";

const Header = () => (
  <Container>
    <CustomTitle title="Movies" fontSize="40px" />
  </Container>
);

export default Header;
