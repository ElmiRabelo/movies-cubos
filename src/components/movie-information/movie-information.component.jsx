import React from "react";

import MovieSinopse from "../movie-sinopse/movie-sinopse.component";
import MovieGenres from "../movie-genres/movie-genres.component";
import ReleaseYear from "../release-year/release-year.component";
import CustomNumber from "../custom-number/custom-number.component";
import TitleContainer from "../title-container/title-container.component";
import CustomTitle from "../custom-title/custom-title.component";

import { Container, Header, Content } from "./movie-information.styles";

const MovieInformation = () => {
  const sinopse =
    "Thor está aprisionado do outro lado do universo, sem seu martelo, e se vê em uma corrida para voltar até Asgard e impedir o Ragnarok, a destruição de seu lar e o fim da civilização asgardiana que está nas mãos de uma nova e poderosa ameaça, a terrível Hela. Mas primeiro ele precisa sobreviver a uma batalha de gladiadores que o coloca contra seu ex-aliado e vingador, o Incrível Hulk.";
  return (
    <Container>
      <CustomNumber number={7.5} textSize="24px" width="70px" isVote />
      <Header>
        <TitleContainer padding="1.9rem 0 0.2rem 6rem" position="flex-start">
          <CustomTitle title="Thor: Ragnarok" size="35px" />
        </TitleContainer>
      </Header>
      <Content>
        <ReleaseYear release_year="2011-04-29" />
        <MovieSinopse overview={sinopse} />
        <MovieGenres />
      </Content>
    </Container>
  );
};

export default MovieInformation;
