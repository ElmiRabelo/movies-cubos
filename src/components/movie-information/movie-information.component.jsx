import React from "react";

import MovieSinopse from "../movie-sinopse/movie-sinopse.component";
import MovieGenres from "../movie-genres/movie-genres.component";
import ReleaseYear from "../release-year/release-year.component";
import CustomNumber from "../custom-number/custom-number.component";
import TitleContainer from "../title-container/title-container.component";
import CustomTitle from "../custom-title/custom-title.component";

import { Container, Header, Content } from "./movie-information.styles";

const MovieInformation = ({ title, overview, release_date, vote_average }) => {
  return (
    <Container>
      <CustomNumber number={vote_average} textSize="24px" width="70px" isVote />
      <Header>
        <TitleContainer padding="1.9rem 0 0.2rem 6rem" position="flex-start">
          <CustomTitle title={title} size="35px" />
        </TitleContainer>
      </Header>
      <Content>
        <ReleaseYear release_year={release_date} />
        <MovieSinopse overview={overview} />
        <MovieGenres />
      </Content>
    </Container>
  );
};

export default MovieInformation;
