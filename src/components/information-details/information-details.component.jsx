import React from "react";
import PropTypes from "prop-types";
import CustomTitle from "../custom-title/custom-title.component";

import { makeDecimal, convertToHour } from "../../utils/movieUtils";

import { Container, Item } from "./information-details.styles";

//reponsavel por renderizar as informações adicionais do filme em detalhes
const InformationDetails = ({ status, language, budget, revenue, runtime }) => {
  return (
    <Container>
      <Item>
        <CustomTitle title="Situação" darker /> <p>{status}</p>
      </Item>
      <Item>
        <CustomTitle title="Idioma" darker /> <p>{language}</p>
      </Item>
      <Item>
        <CustomTitle title="Duração" darker /> <p> {convertToHour(runtime)}</p>
      </Item>
      <Item>
        <CustomTitle title="Orçamento" darker /> <p>${makeDecimal(budget)}</p>
      </Item>
      <Item>
        <CustomTitle title="Receita" darker /> <p>${makeDecimal(revenue)}</p>
      </Item>
      <Item>
        <CustomTitle title="Lucro" darker />{" "}
        <p>${makeDecimal(budget - revenue)}</p>
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
