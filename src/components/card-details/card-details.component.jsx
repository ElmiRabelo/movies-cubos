import React from "react";
import PropTypes from "prop-types";

import { getOriginalLanguage, getGenresIds } from "../../utils/movieUtils";
import { posterSizes } from "../../utils/imageUtils";

import CustomTitle from "../custom-title/custom-title.component";
import ReleaseYear from "../release-year/release-year.component";
import MovieSinopse from "../movie-sinopse/movie-sinopse.component";
import MoviePoster from "../movie-poster/movie-poster.component";
import InformationDetails from "../information-details/information-details.component";
import CustomNumber from "../custom-number/custom-number.component";
import MovieGenres from "../movie-genres/movie-genres.component";

import {
  MovieContainer,
  Header,
  ContentContainer,
  InformationContainer,
  ImageContainer,
  ExtraContainer
} from "./card-details.styles";

//renderiza um card com com as informações de um filme em detalhes
const CardDetails = ({
  movieDetails: {
    title,
    release_date,
    overview,
    status,
    runtime,
    budget,
    revenue,
    vote_average,
    poster_path,
    original_language,
    spoken_languages,
    genres
  }
}) => {
  return (
    <MovieContainer>
      <Header>
        <CustomTitle title={title} darker />
        <ReleaseYear release_year={release_date} />
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
              status={status}
              language={getOriginalLanguage(
                original_language,
                spoken_languages
              )}
              runtime={runtime}
              budget={budget}
              revenue={revenue}
            />
          </article>
          <ExtraContainer>
            <MovieGenres genre_ids={getGenresIds(genres)} />
            <CustomNumber number={vote_average} isVote />
          </ExtraContainer>
        </InformationContainer>
        <ImageContainer>
          <MoviePoster
            posterUrl={poster_path}
            posterSize={posterSizes.medium}
            title={title}
          />
        </ImageContainer>
      </ContentContainer>
    </MovieContainer>
  );
};

CardDetails.propTypes = {
  movieDetails: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    status: PropTypes.string,
    runtime: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    vote_average: PropTypes.number,
    poster_path: PropTypes.string,
    original_language: PropTypes.string,
    spoken_languages: PropTypes.arrayOf(PropTypes.object),
    genres: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};

export default CardDetails;
