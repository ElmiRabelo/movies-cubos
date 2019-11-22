import React from "react";

import { Link } from "react-router-dom";

import CustomTitle from "../custom-title/custom-title.component";

import { Container } from "./header.styles";

const Header = () => (
  <Container>
    <Link to="/">
      <CustomTitle title="Movies" fontSize="40px" />
    </Link>
  </Container>
);

export default Header;
