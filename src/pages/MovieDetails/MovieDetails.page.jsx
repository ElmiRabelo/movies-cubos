import React, { useEffect, Fragment } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MovieDetailsActions } from "../../redux/ducks/movieDetails.ducks";

import CustomTitle from "../../components/custom-title/custom-title.component";
import ReleaseYear from "../../components/release-year/release-year.component";
import MovieSinopse from "../../components/movie-sinopse/movie-sinopse.component";
import MoviePoster from "../../components/movie-poster/movie-poster.component";
import InformationDetails from "../../components/information-details/information-details.component";
import CustomNumber from "../../components/custom-number/custom-number.component";
import MovieGenres from "../../components/movie-genres/movie-genres.component";
import Loading from "../../components/loading/loading.component";

import {
  makeDecimal,
  convertToHour,
  getOriginalLanguage,
  getGenresIds
} from "../../utils/movieUtils";

import {
  Container,
  MovieContainer,
  Header,
  ContentContainer,
  InformationContainer,
  ImageContainer,
  ExtraContainer,
  TrailerContainer
} from "./MovieDetails.styles";

class MovieDetails extends React.Component {
  componentDidMount() {
    this.props.getRequest(this.props.match.params.id);
  }
  render() {
    const {
      title,
      release_date,
      overview,
      status,
      runtime,
      budget,
      revenue,
      vote_average,
      poster_path,
      videos,
      original_language,
      spoken_languages,
      genres
    } = this.props.movieDetails.data;
    const profit = budget - revenue;
    return (
      <Fragment>
        {this.props.movieDetails.loading ? (
          <Loading />
        ) : (
          <Container>
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
                      runtime={convertToHour(runtime)}
                      budget={makeDecimal(budget)}
                      revenue={makeDecimal(revenue)}
                      profit={makeDecimal(profit)}
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
                    posterSize="w342"
                    title={title}
                  />
                </ImageContainer>
              </ContentContainer>
            </MovieContainer>

            {videos.results.length > 0 && (
              <TrailerContainer>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videos.results[0].key}`}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </TrailerContainer>
            )}
          </Container>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movieDetails: state.movieDetails
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MovieDetailsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
