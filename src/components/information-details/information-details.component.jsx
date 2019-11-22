import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import translate from "translate";
import CustomTitle from "../custom-title/custom-title.component";

import { makeDecimal, convertToHour } from "../../utils/movieUtils";

import { Container, Item } from "./information-details.styles";

//reponsavel por renderizar as informações adicionais do filme em detalhes
const InformationDetails = ({
  status,
  language,
  budget,
  revenue,
  runtime,
  profit
}) => {
  const [idioma, setIdioma] = useState("...");
  const [situacao, setSituacao] = useState("...");
  const [orcamento, setOrcamento] = useState("...");
  const [receita, setReceita] = useState("...");
  const [duracao, setDuracao] = useState("...");
  const [lucro, setLucro] = useState("...");

  //faz a tradução de texto em inglês para portugues
  const formatInformations = async () => {
    translate.engine = "yandex";
    translate.key = process.env.REACT_APP_YANDEX_KEY;
    const textoStatus = await translate(status, { to: "pt" });
    const textoIdioma = await translate(language, { to: "pt" });
    setSituacao(textoStatus);
    setIdioma(textoIdioma);
    setOrcamento(makeDecimal(budget));
    setReceita(makeDecimal(revenue));
    setLucro(makeDecimal(budget - revenue));
    setDuracao(convertToHour(runtime));
  };

  useEffect(() => {
    formatInformations();
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
        <CustomTitle title="Duração" darker /> <p> {duracao}</p>
      </Item>
      <Item>
        <CustomTitle title="Orçamento" darker /> <p>${orcamento}</p>
      </Item>
      <Item>
        <CustomTitle title="Receita" darker /> <p>${receita}</p>
      </Item>
      <Item>
        <CustomTitle title="Lucro" darker /> <p>${lucro}</p>
      </Item>
    </Container>
  );
};

InformationDetails.propTypes = {
  status: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  budget: PropTypes.number.isRequired,
  revenue: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired
};

export default InformationDetails;
