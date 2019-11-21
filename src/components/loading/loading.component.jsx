import React from "react";

import { Spinner, Container } from "./loading.styles";
import LoadingIcon from "../../assets/loading.svg";

const Loading = () => (
  <Container>
    <Spinner src={LoadingIcon} alt="Carregando" />
  </Container>
);

export default Loading;
