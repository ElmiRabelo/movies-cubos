import React from "react";

import TitleContainer from "../title-container/title-container.component";
import CustomTitle from "../custom-title/custom-title.component";

const Header = () => (
  <TitleContainer height="70px" padding="15px" position="center">
    <CustomTitle title="Movies" size="40px" />
  </TitleContainer>
);

export default Header;
