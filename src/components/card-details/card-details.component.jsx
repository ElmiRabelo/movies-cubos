import React, { Fragment } from "react";
import PropTypes from "prop-types";
//Redux and utils
import { connect } from "react-redux";
import {
  getGenresIds,
  getOriginalLanguage,
  translateInformations,
  makeDecimal,
  convertToHour
} from "../../utils/movieUtils";
import { posterSizes } from "../../utils/imageUtils";
//Components and Styles
import CustomTitle from "../custom-title/custom-title.component";
import ReleaseYear from "../release-year/release-year.component";
import MoviePoster from "../movie-poster/movie-poster.component";
import CustomNumber from "../custom-number/custom-number.component";
import MovieGenres from "../movie-genres/movie-genres.component";
import {
  MovieContainer,
  Header,
  ContentContainer,
  InformationContainer,
  ImageContainer,
  ExtraContainer,
  ExtraDetailsContainer,
  Item
} from "./card-details.styles";

//renderiza um card com com as informações de um filme em detalhes
class CardDetails extends React.Component {
  //É uma parte do codigo necessária devido a utilização da translate api. Dessa forma não continuará a rodar setState quando o compoente não estiver sendo renderizado.
  _isMounted = false;
  state = {
    translated: {
      idioma: "...",
      situacao: "..."
    }
  };

  async componentDidMount() {
    const idioma = await translateInformations(this.props.orignalLanguage);
    const situacao = await translateInformations(
      this.props.movieDetails.status
    );
    this._isMounted = true;
    if (this._isMounted) {
      this.setState({ translated: { idioma, situacao } });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {
      runtime,
      revenue,
      budget,
      profit,
      genres,
      movieDetails
    } = this.props;
    const {
      title,
      release_date,
      overview,
      vote_average,
      poster_path
    } = movieDetails;
    const { idioma, situacao } = this.state.translated;

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
              <p>{overview}</p>
            </article>
            <article>
              <CustomTitle title="Informações" darker hasBorder />

              <ExtraDetailsContainer>
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
              </ExtraDetailsContainer>
            </article>

            <ExtraContainer>
              <MovieGenres genre_ids={genres} />
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
  }
}

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
    poster_path: PropTypes.string
  }).isRequired,
  genres: PropTypes.arrayOf(PropTypes.number).isRequired,
  orignalLanguage: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  budget: PropTypes.string.isRequired,
  revenue: PropTypes.string.isRequired,
  profit: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  movieDetails: state.movieDetails.data,
  genres: getGenresIds(state.movieDetails),
  orignalLanguage: getOriginalLanguage(state.movieDetails.data),
  runtime: convertToHour(state.movieDetails.data.runtime),
  budget: makeDecimal(state.movieDetails.data.budget),
  revenue: makeDecimal(state.movieDetails.data.revenue),
  profit: makeDecimal(
    state.movieDetails.data.budget - state.movieDetails.data.revenue
  )
});

export default connect(mapStateToProps)(CardDetails);
