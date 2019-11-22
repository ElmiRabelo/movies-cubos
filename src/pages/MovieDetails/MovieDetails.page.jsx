import React, { Fragment } from "react";
import PropTypes from "prop-types";

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MovieDetailsActions } from "../../redux/ducks/movieDetails.ducks";

import Loading from "../../components/loading/loading.component";
import CardDetails from "../../components/card-details/card-details.component";

import { Container, TrailerContainer } from "./MovieDetails.styles";

//Pagina responsavel por renderizar card-details com informações do filme, como o trailer. é feito o request das informações do filme, obtendo a id do filme atraves da url
class MovieDetails extends React.Component {
  componentDidMount() {
    this.props.getRequest(this.props.match.params.id);
  }
  render() {
    const { videos } = this.props.movieDetails.data;
    const { loading, data } = this.props.movieDetails;
    console.tron.log(this.props.movieDetails.data);
    return (
      <Fragment>
        {loading ? (
          <Loading />
        ) : (
          <Container>
            <CardDetails movieDetails={data} />

            {videos.results.length > 0 && (
              <TrailerContainer>
                <iframe
                  title="Movie Trailer"
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videos.results[0].key}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </TrailerContainer>
            )}
          </Container>
        )}
      </Fragment>
    );
  }
}

MovieDetails.propTypes = {
  getRequest: PropTypes.func.isRequired,
  movieDetails: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.object
  }).isRequired
};

const mapStateToProps = state => ({
  movieDetails: state.movieDetails
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MovieDetailsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
