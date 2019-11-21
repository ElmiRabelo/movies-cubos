import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PaginationActions } from "../../redux/ducks/pagination.ducks";

import CustomNumber from "../custom-number/custom-number.component";

import { Container, PageNumber } from "./pagination.styles";

const Pagination = ({
  totalMovies,
  setCurrentPage,
  pagination: { currentPage, moviesPerPage }
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Container>
      {pageNumbers.map(page =>
        page === currentPage ? (
          <CustomNumber
            key={page}
            number={page}
            onClick={() => setCurrentPage(page)}
          />
        ) : (
          <PageNumber key={page} onClick={() => setCurrentPage(page)}>
            {page}
          </PageNumber>
        )
      )}
    </Container>
  );
};

Pagination.propTypes = {
  totalMovies: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  pagination: PropTypes.shape({
    currentPage: PropTypes.number,
    moviesPerPage: PropTypes.number
  }).isRequired
};

const mapStateToProps = state => ({
  movies: state.movies,
  pagination: state.pagination
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PaginationActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
