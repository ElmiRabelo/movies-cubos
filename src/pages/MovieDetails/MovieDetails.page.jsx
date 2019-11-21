import React from "react";

import CustomTitle from "../../components/custom-title/custom-title.component";
import ReleaseYear from "../../components/release-year/release-year.component";
import MovieSinopse from "../../components/movie-sinopse/movie-sinopse.component";
import MoviePoster from "../../components/movie-poster/movie-poster.component";
import InformationDetails from "../../components/information-details/information-details.component";
import CustomNumber from "../../components/custom-number/custom-number.component";
import MovieGenres from "../../components/movie-genres/movie-genres.component";

import {
  Container,
  MovieContainer,
  Header,
  ContentContainer,
  InformationContainer,
  ImageContainer,
  ExtraContainer
} from "./MovieDetails.styles";

const MovieDetails = () => {
  const overview =
    "Thor está aprisionado do outro lado do universo, sem seu martelo, e se vê em uma corrida para voltar até Asgard e impedir o Ragnarok, a destruição de seu lar e o fim da civilização asgardiana que está nas mãos de uma nova e poderosa ameaça, a terrível Hela. Mas primeiro ele precisa sobreviver a uma batalha de gladiadores que o coloca contra seu ex-aliado e vingador, o Incrível Hulk.";
  return (
    <Container>
      <MovieContainer>
        <Header>
          <CustomTitle title="Thor: Ragnarok" darker />
          <ReleaseYear release_year="2019-03-29" />
        </Header>
        <ContentContainer>
          <InformationContainer>
            <article>
              <CustomTitle title="Sinopse" darker hasBorder />
              <MovieSinopse overview={overview} />
            </article>
            <article>
              <CustomTitle title="Informações" darker hasBorder />
              <InformationDetails
                status="Released"
                language="English"
                runtime="131"
                budget="180.000.000.00"
                revenue="180.000.000"
                profit="18.000"
              />
            </article>
            <ExtraContainer>
              <MovieGenres genre_ids={[28, 12, 35, 14]} />
              <CustomNumber number={7.5} isVote />
            </ExtraContainer>
          </InformationContainer>
          <ImageContainer>
            <MoviePoster
              posterUrl="/bLpIFiuWF1bKnBqi7LqnJcLHtN.jpg"
              posterSize="w342"
              title="thor"
            />
          </ImageContainer>
        </ContentContainer>
      </MovieContainer>

      <iframe
        width="100%"
        height="572px"
        src="https://www.youtube.com/embed/ANm6x1r6svg"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Container>
  );
};

export default MovieDetails;
