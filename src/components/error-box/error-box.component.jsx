import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ErrorActions } from "../../redux/ducks/error.ducks";

import { Container } from "./error-box.styles";

const ErrorBox = ({ error: { visible, message }, hideError }) =>
  visible && (
    <Container>
      <p>{message}</p>
      <button onClick={hideError}>X</button>
    </Container>
  );

const mapStateToProps = state => ({
  error: state.error
});

ErrorBox.propTypes = {
  hideError: PropTypes.func.isRequired,
  error: PropTypes.shape({
    visible: PropTypes.bool,
    message: PropTypes.string
  }).isRequired
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(ErrorActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBox);
