import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import translate from "translate";
import CustomTitle from "../custom-title/custom-title.component";

import { Container, Item } from "./information-details.styles";

const InformationDetails = ({
  status,
  language,
  budget,
  revenue,
  runtime,
  profit
}) => {
  const [idioma, setIdioma] = useState("...");
  const [situacao, setSituacao] = useState("");

  const traduzir = async () => {
    translate.engine = "yandex";
    translate.key = process.env.REACT_APP_YANDEX_KEY;
    const textoStatus = await translate(status, { to: "pt" });
    const textoIdioma = await translate(language, { to: "pt" });
    setSituacao(textoStatus);
    setIdioma(textoIdioma);
  };

  useEffect(() => {
    traduzir();
  });

  return (
    <Container>
      <Item>
        <CustomTitle title="Situação" darker /> <p>{situacao}</p>
      </Item>
      <Item>
        <CustomTitle title="Idioma" darker /> <p>{idioma}</p>
      </Item>
      <Item>
        <CustomTitle title="Duração" darker /> <p> {runtime}</p>
      </Item>
      <Item>
        <CustomTitle title="Orçamento" darker /> <p>${budget}</p>
      </Item>
      <Item>
        <CustomTitle title="Receita" darker /> <p>${revenue}</p>
      </Item>
      <Item>
        <CustomTitle title="Lucro" darker /> <p>${profit}</p>
      </Item>
    </Container>
  );
};

InformationDetails.propTypes = {
  status: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  budget: PropTypes.string.isRequired,
  revenue: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  profit: PropTypes.string.isRequired
};

export default InformationDetails;
