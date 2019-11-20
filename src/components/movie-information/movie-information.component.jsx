import React from "react";

import MovieSinopse from "../movie-sinopse/movie-sinopse.component";
import MovieGenres from "../movie-genres/movie-genres.component";
import ReleaseYear from "../release-year/release-year.component";
import CustomNumber from "../custom-number/custom-number.component";
import CustomTitle from "../custom-title/custom-title.component";

import { Container, Header, Content } from "./movie-information.styles";

const MovieInformation = ({
  title,
  overview,
  release_date,
  vote_average,
  genre_ids
}) => {
  return (
    <Container>
      <CustomNumber number={vote_average} isVote />
      <Header>
        <CustomTitle title={title} fontSize="35px" />
      </Header>
      <Content>
        <ReleaseYear release_year={release_date} />
        <MovieSinopse overview={overview} />
        <MovieGenres genre_ids={genre_ids} />
      </Content>
    </Container>
  );
};

export default MovieInformation;
