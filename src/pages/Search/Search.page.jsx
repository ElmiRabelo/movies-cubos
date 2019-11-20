import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as GenresActions } from "../../redux/ducks/genres.ducks";

import InputSearch from "../../components/input-search/input-search.component";
import MoviesOverview from "../../components/movies-overview/movies-overview.component";

import { Container } from "./Search.styles";

class Search extends React.Component {
  static propTypes = {
    getRequest: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getRequest();
  }

  render() {
    return (
      <Container>
        <InputSearch placeholder="Busque um filme por nome, ou gênero..." />
        <MoviesOverview />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  genres: state.genres
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(GenresActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
