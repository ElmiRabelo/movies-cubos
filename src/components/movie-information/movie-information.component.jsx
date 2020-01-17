import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//Components and Styles
import MovieSinopse from "../movie-sinopse/movie-sinopse.component";
import MovieGenres from "../movie-genres/movie-genres.component";
import ReleaseYear from "../release-year/release-year.component";
import CustomNumber from "../custom-number/custom-number.component";
import CustomTitle from "../custom-title/custom-title.component";
import {
  InformationContainer,
  Header,
  Content
} from "./movie-information.styles";

//Responsavel por ser o container de componentes relacionandos a informações do filme, como titulo, sinopse, generos
const MovieInformation = ({
  id,
  title,
  overview,
  release_date,
  vote_average,
  genre_ids
}) => {
  return (
    <InformationContainer>
      <Header>
        <Link to={`/movie/${id}`}>
          <CustomTitle title={title} />
        </Link>
        <CustomNumber number={vote_average} isVote />
      </Header>
      <Content>
        <ReleaseYear release_year={release_date} />
        <MovieSinopse overview={overview} />
        <MovieGenres genre_ids={genre_ids} />
      </Content>
    </InformationContainer>
  );
};

MovieInformation.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default MovieInformation;
