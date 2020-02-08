import React from "react";
import { Link } from "react-router-dom";
import CustomTitle from "../custom-title/custom-title.component";
import { Container } from "./header.styles";

const Header = () => (
  <Container>
    <Link to="/">
      <CustomTitle title="BADASS Movies" />
    </Link>
    <nav>
      <Link to="/">Search</Link>
    </nav>
  </Container>
);

export default Header;
